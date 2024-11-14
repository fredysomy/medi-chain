const passport = require("passport");
const checkCredentials = require("../utils/checkCredentials");
const User = require("../models/users");
const Doctor = require("../models/doctors");
const db = require("../config/mysqlorm.config");
const uuid = require("uuid");
const { encrypt } = require("../utils/enc_and_dec");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  contractInstance,
  account,
  sendTransaction,
} = require("../config/web3.config");
const login = (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      console.error("Authentication error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.logIn(user, async (err) => {
      if (err) {
        console.error("Session login error:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      // Save user details in session
      req.session.userid = user.id;
      req.session.email = user.email;
      req.session.role = "user";
      // Save the session data
      req.session.save((err) => {
        if (err) {
          console.error("Session save error:", err);
          return res.status(500).json({ message: "Internal server error" });
        }
        return res.status(200).json({ message: "Login successful" });
      });
    });
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      return res.status(200).json({ message: "Logout successful" });
    });
  });
};

const register = async (req, res) => {
  const { userUlid, username, email, age, dob, blood_group, password } =
    req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Invalid request" });
  }
  const userExists = await User(db.sequelize).findOne({
    where: { email: email },
  });
  if (userExists !== null) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const UserULID = uuid.v4();
    const enckey = await encrypt();
    const user = await User(db.sequelize).create({
      name: username,
      email: email,
      password: hashedPassword,
      uuid: UserULID,
      seckey: enckey,
      age: age,
      dob: dob,
      blood_group: blood_group,
    });

    const tx = contractInstance.methods.createUser(UserULID, username);
    const receipt = await sendTransaction(tx);
    console.log("User created, transaction receipt:", receipt);

    return res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error("User create error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const checkSessionExist = (req, res) => {
  console.log("Checking session");
  console.log(req.session);
  if (
    req.session.passport?.user &&
    (req.session.passport?.user.username || req.session.passport?.user.email)
  ) {
    res
      .status(200)
      .json({ message: "Session exists", user: req.session.passport });
  } else {
    res.status(401).json({ message: "Session does not exist" });
  }
};

const openidcallback = async (req, res) => {
  console.log("dfdsfsdfsdf");
  //console.log(req);
  const data = jwt.decode(req.authInfo);

  req.session.userid = req.user.id;
  req.session.email = "asdasdasdasd";
  req.session.role = "doctor";
  console.log("asdasdasd", data);
  const doctor = await Doctor(db.sequelize).findOne({
    where: { email: data.unique_name },
  });
  console.log(doctor);
  if (doctor === null) {
    await Doctor(db.sequelize).create({
      name: data.name,
      email: data.unique_name,
      uuid: req.user.id,
    });
  }

  // Save the session data
  req.session.save((err) => {
    console.log(req.session);
    if (err) {
      console.error("Session save error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.json({ message: "Login successful" });
  });
};
module.exports = {
  login,
  register,
  logout,
  checkSessionExist,
  openidcallback,
};
