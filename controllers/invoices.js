const Invoice = require('../models/invoice');
const Part = require('../models/part');

module.exports = {
    create,
    new: newInvoice
};

function newInvoice(req, res) {
    Part.find({}, (err, parts) => {
        res.render('invoices/new', {
            title: 'Add New Invoice', parts
        })
    })
};

function create(req, res) {
    const invoice = new Invoice(req.body);
    invoice.save(function (err) {
        if (err) return res.render('invoices/new');
        res.redirect('/parts')
    });
}