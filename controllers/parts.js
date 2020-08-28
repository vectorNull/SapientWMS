const Part = require('../models/part');
const Invoice = require('../models/invoice');

module.exports = {
    index,
    show,
    create,
    new: newInvoice
};

function index (req, res) {
    Part.findById({}, function(err, parts) {
        res.render('parts/index', { title: 'Complete Inventory', parts})
    });
}

function show(req, res) {
    Part.findById(req.params.id, function(err, part) {
        res.render('parts/show', { title: 'Part Details', part})
    });
}

function create(req, res) {
    const invoice = new Invoice(req.body);
    invoice.save(function (err) {
        if (err) return res.render('parts/new');
        res.redirect('/parts')
    });
}

function newInvoice(req, res) {
    res.render('parts/new', { title: 'New Invoice'})
}