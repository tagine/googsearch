const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    googleid: {type: Number, required: true, unique: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: false}
});

const Message = mongoose.model("Books", messageSchema);

module.exports = Message;

