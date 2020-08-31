const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    invoiceNumber: String,
    partNumber: String, 
    description: String,
    quantity: Number,
    dateReceived: Date
});

module.exports = mongoose.model('Invoice', invoiceSchema);