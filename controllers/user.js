const User = require('../models/user');

exports.addUser = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    User.create({
        username: username,
        email: email,
        phone: phone
    })
        .then(result => {
            console.log("Added Successfully");
        })
        .catch(err => console.log(err));
}

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => console.log(err));
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User.destroy({ where: { id: id } })
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
}