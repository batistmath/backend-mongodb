const mongoose = require("mongoose");
const States = require("../model/state");
const User = require("../model/user");

module.exports = {
  getStates: async (req, res) => {
    let states = await States.find();
    res.json({ states });
  },
  getUser: async (req, res) => {
    let users = await User.find();
    res.json({ users });
  },
};
