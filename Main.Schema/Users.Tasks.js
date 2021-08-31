const mongoose = require("mongoose");

const schema = mongoose.model('Task', new mongoose.Schema({
    _id: String,
    guildID: String,
    Invite: Number,
    Register: Number,
    Tagged: Number,
    Staff: Number,
    Message: Number,
    Voice: Number,
    Completed: {type: Array},
    Active: { type: Boolean, default: true },
}));

module.exports = schema;