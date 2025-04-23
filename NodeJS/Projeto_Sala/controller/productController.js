const mongoose = require('mongose');
const State = require('../model/state');
const User = require('../model/product');

module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();
        res.json({states});
    }
}

