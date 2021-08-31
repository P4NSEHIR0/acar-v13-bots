const mongoose = require("mongoose");

const schema = mongoose.model('Stat', new mongoose.Schema({
    _id: String,
    guildID: String,
    voiceJoinedAt: Number,
    totalVoice: { type: Number, default: 0 },
    totalMessage: { type: Number, default: 0 },
    totalStream: { type: Number, default: 0 },
    totalCamera: { type: Number, default: 0 },
    voiceParents: Map,
    textParents: Map,
    voiceChannels: Map,
    textChannels: Map,
}));

module.exports = schema;