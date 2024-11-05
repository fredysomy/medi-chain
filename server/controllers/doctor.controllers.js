const User = require("../models/users");
const Access = require("../models/doctoraccess");
const crypto = require("crypto");
const IV = process.env.IV;
const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
const encryptionKey = process.env.SEC_KEY;
const multer = require("multer");
const FormData = require("form-data");
const { Readable } = require("stream");
const storage = multer.memoryStorage();
const axios = require("axios");
const uuid = require("uuid");
const checkAccess = require("../middlewere/checkAccess");
const { decrypt } = require("../utils/enc_and_dec");

exports.getUserById = async (req, res) => {
  console.log(req);
  const { id } = req.query;
  const user = await User(db.sequelize).findOne({ where: { uuid: id } });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { password, seckey, ...rest } = user.dataValues;
  return res.status(200).json({ rest });
};

function encryptFile(buffer, enckey) {
  const iv = IV;
  console.log(iv);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(enckey, "hex"),
    Buffer.from(iv, "hex")
  );

  let encrypted = cipher.update(buffer);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return { iv, encryptedData: encrypted };
}

// Upload encrypted file to Pinata
function bufferToStream(buffer) {
  return Readable.from(buffer);
}

// Upload encrypted file to Pinata
async function uploadToPinata(fileBuffer, filename) {
  const formData = new FormData();
  const fileStream = bufferToStream(fileBuffer);

  formData.append("file", fileStream, {
    filename,
    knownLength: fileBuffer.length, // Set the Content-Length
    contentType: "application/octet-stream", // Specify content type
  });

  try {
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {
          ...formData.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
        },
      }
    );
    return response.data.IpfsHash;
  } catch (error) {
    console.error(
      "Error uploading to Pinata:",
      error.response?.data || error.message
    );
    throw new Error("Failed to upload to Pinata");
  }
}

// Controller function to handle multiple file upload, encryption, and Pinata storage
exports.createEntry = async (req, res) => {
  console.log(req.user.patient);
  const sec_key = await decrypt(req.user.patient);
  multer({ storage }).array("files")(req, res, async (err) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }
      console.log(req.files);
      const results = [];

      for (const file of req.files) {
        const fileBuffer = file.buffer;

        // Encrypt the file
        const { iv, encryptedData } = encryptFile(fileBuffer, sec_key);
        const encryptedFilename = `encrypted_${file.originalname}`;

        // Upload the encrypted file to Pinata
        const ipfsHash = await uploadToPinata(encryptedData, encryptedFilename);

        // Add the IPFS hash and IV to the results
        results.push({
          originalName: file.originalname,
          ipfsHash,
          iv: iv.toString("hex"), // Send IV for decryption
        });
      }

console.log(results)
    } catch (error) {
      console.error("File upload error:", error);
      res
        .status(500)
        .json({ message: "Failed to process files", error: error.message });
    }
  });
};

exports.requestAccess = async (req, res) => {
  const acc_id = uuid.v4();
  const { user_id } = req.body;
  const doc_id = req.user.id;

  const existsAccessRequest = await Access(db.sequelize).findOne({
    where: {
      user_id,
      doc_id,
      has_access: false,
      status: "pending",
    },
  });
  if (existsAccessRequest) {
    return res.json({ message: "Request already exists" });
  }
  const access = await Access(db.sequelize).create({
    acc_id,
    user_id,
    doc_id,
    doc_name: req.user.displayName,
    has_access: false,
    status: "pending",
  });
  if (access) {
    return res.json({ message: "Request sent" });
  }
};
