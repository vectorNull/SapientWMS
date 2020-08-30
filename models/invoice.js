const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    invoiceNumber: String,
    quantity: Number,
    description: String,
    partNumber: String, 
    dateReceived: Date
});

module.exports = mongoose.model('Invoice', invoiceSchema);