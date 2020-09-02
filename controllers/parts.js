const Part = require('../models/part');
const Invoice = require('../models/invoice');


module.exports = {
    index,
    create,
    new: newPart,
    show
};

function newPart(req, res) {
    res.render('parts/new', { title: 'New Part'})
};

function create(req, res) {
    req.body.quantity = 0;
    const part = new Part(req.body);
    part.save(function (err) {
        if (err) return res.render('parts/new');
        res.redirect('/parts')
    });
}

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



