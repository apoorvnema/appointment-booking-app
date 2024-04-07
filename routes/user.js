const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/add-user', userController.addUser);

router.get('/get-users', userController.getUsers);

router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;