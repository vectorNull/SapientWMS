const Invoice = require('../models/invoice');

module.exports = {
    create,
    new: newInvoice
};

function newInvoice(req, res) {
    res.render('invoices/new', { title: 'New Invoice'})
};

function create(req, res) {
    const invoice = new Invoice(req.body);
    invoice.save(function (err) {
        if (err) return res.render('invoices/new');
        res.redirect('/parts')
    });
}