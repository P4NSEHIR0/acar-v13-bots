const mongoose = require("mongoose");

const schema = mongoose.model('Guild', new mongoose.Schema({
    _id: String,
    guildID: String,
    BannedDiscriminators: Array,
    BannedTags: Array,
    UpstaffSystem: {type: Boolean, default: false},
    Upstaffs: Object,
    CoinSystem: {type: Boolean, default: false},
    Coin: Object,
    TaskSystem: {type: Boolean, default: false},
    Taks: Object,
    Setup: {type: Boolean, default: false},
    Webcontrol: {type: Boolean, default: false},
    AutoInstaller: {type: Boolean, default: false},
    SMS: {type: Boolean, default: false},
    sGateway: {type: String, default: "VatanSMS"},
    sUserID: String,
    sUsername: String,
    sPassword: String,
    sNumber: String,
    sDisplayName: String,
    Whatsapp: {type: Boolean, default: false},
    wGateway: String,
    wSecret: String,
    Telegram:  {type: Boolean, default: false},
    tGateway: String,
    tSecret: String,

}));

module.exports = schema;
