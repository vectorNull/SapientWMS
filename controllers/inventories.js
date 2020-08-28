const Inventory = require('../models/inventory');

module.exports = {
    index
};

function index (req, res) {
    Inventory.findById({}, function(err, inventories) {
        res.render('inventories/index', { title: 'Complete Inventory', inventories})
    });
}