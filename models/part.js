const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    partNumber: String,
    Quantity: Number,
    description: String,
    InvoiceNum: String
});

module.exports = mongoose.model('Part', partSchema);