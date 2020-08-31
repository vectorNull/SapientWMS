const Part = require('../models/part');


module.exports = {
    index,
    show
};

function index (req, res) {
    console.log('We are here');
    Part.find({}, function(err, parts) {
        res.render('parts/index', { title: 'Complete Inventory', parts })
    });
}

function show(req, res) {
    Part.findById(req.params.id, function(err, part) {
        res.render('parts/show', { title: 'Part Details', part})
    });
}



