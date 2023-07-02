const mongoose = require("mongoose");
const User = require("../domain/user");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  age: Number,
});

const UserModel = mongoose.model("User", userSchema);

const getUser = async (userId) => {
  const userData = await UserModel.findById(userId);
  if (!user) {
    return null;
  }
  const user = new User(userData.name, userData.password, userData.age);
  return user;
};

const saveUser = async (user) => {
  const userModel = new UserModel({
    name: user.name,
    password: user.password,
    age: user.age,
  });
  await userModel.save();
};
module.exports = {
  getUser,
  saveUser,
};
