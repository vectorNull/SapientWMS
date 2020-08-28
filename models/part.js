const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    partNumber: String,
    description: String,
    Quantity: Number,
    InvoiceNum: String
});

module.exports = mongoose.model('Part', partSchema);