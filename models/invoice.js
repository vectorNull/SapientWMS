const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    part: {type: Schema.Types.ObjectId, ref: 'Part'},
    invoiceNumber: String,
    invoiceQuantity: Number,
    dateReceived: Date
});

module.exports = mongoose.model('Invoice', invoiceSchema);