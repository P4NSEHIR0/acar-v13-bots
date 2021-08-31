const mongoose = require("mongoose");

const schema = mongoose.model('Overwrite', new mongoose.Schema({
    _id: String,
    guildID: String,
    Date: String,
    Type: {type: Number, default: 0},
    Records: Array,
    Auto: {type: Boolean, default: false},

}));

module.exports = schema;