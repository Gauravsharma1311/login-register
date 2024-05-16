const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, config.secretKey, {
    expiresIn: config.expiresIn,
  });
};

const register = async (req, res) => {
  try {
    const { username, password, email, mobile } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      mobile,
      password: hashedPassword,
    });
    await user.save();
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid Username" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
