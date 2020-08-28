const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    partNumber: String,
    description: String,
    Quantity: Number,
    ReceivedDate: Date
});

module.exports = mongoose.model('Inventory', inventorySchema);