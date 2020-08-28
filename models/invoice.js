const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    invoiceNumber: String,
    dateReceived: Date,
    quantity: Number,
    partNumber: String 
});

module.exports = mongoose.model('Invoice', invoiceSchema);