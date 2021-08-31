const mongoose = require("mongoose");

const schema = mongoose.model('Invite', new mongoose.Schema({
    _id: String,
    guildID: String,
    InviterID: String,
    Invite: Number,
    Fake: Number,
    Tagged: Number,
    Bonus: Number
}));

module.exports = schema;