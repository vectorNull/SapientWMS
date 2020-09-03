const Part = require('../models/part');

module.exports = {
    new: newIssue,
    deleteQty
}

function newIssue(req, res) {
    Part.find({}, (err, parts) => {
        res.render('issues/new', {
            title: 'Issue Part', parts
        })
    })
};

function deleteQty(req, res) {
    Part.findById(req.body.part, function(err, part) {
        const newQuantity = rec.body.issueQuantity - part.quantity;
        Part.findByIdAndUpdate(part._id, { quantity: newQuantity }, function(err) {
            if (err) return console.log(err);
            res.redirect('/parts')
        })
    })
}