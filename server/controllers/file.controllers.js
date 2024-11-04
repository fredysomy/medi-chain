const minioClient = require("../config/minio.config");

exports.uploadFile = async (req, res) => {
  try {
    if (req.files === null) {
      return res.status(400).json({ message: "No file uploaded" });
    }
   
    const file = req.file;
    const bucketName = 'profilepicsmedichain';
    const objectName = Date.now() + '-' + file.originalname;

    minioClient.putObject(bucketName, objectName, file.buffer, file.size, (err, etag) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const fileUrl = `${minioClient.protocol}//${minioClient.host}:${minioClient.port}/${bucketName}/${objectName}`;
        res.status(200).json({ url: fileUrl });
    });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "An error occurred while uploading file." });
  }
};
