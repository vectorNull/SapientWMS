const Part = require('../models/part');

module.exports = {
    new: newIssue,
    create,
}

function newIssue(req, res) {
    Part.find({}, (err, parts) => {
        res.render('issues/new', {
            title: 'Issue Part', parts
        })
    })
};

function create() {

}