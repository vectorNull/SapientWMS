const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    partNumber: String,
    quantity: Number,
    description: String,
    invoices: [{type: Schema.Types.ObjectId, ref: 'Invoice'}]
});

module.exports = mongoose.model('Part', partSchema);