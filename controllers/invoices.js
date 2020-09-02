const Invoice = require('../models/invoice');
const Part = require('../models/part');

module.exports = {
    create,
    new: newInvoice,
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
    invoice.save(function(err) {
        Part.findById(req.body.part, function(err, part) {
            const newQuantity = part.quantity + invoice.invoiceQuantity;
            Part.findByIdAndUpdate(part._id, { quantity: newQuantity }, function(err, newPart) {
                if (err) return console.log(err);
                res.redirect('/parts')
            })
        })
    })
}

