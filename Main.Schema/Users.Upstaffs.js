const mongoose = require("mongoose");

const schema = mongoose.model('Upstaff', new mongoose.Schema({
    _id: String,
    guildID: String,
    InvitePoint: Number,
    RegisterPoint: Number,
    TaggedPoint: Number,
    CameraPoint: Number,
    StreamPoint: Number,
    VoicePoint: Number,
    MessagePoint: Number,
    VoiceParentPoint: Map,
    Point: {type: Number, default: 0},
    staffNo: {type: number, default: 0},

}));

module.exports = schema;