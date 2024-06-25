const express = require('express')
const router = express.Router();

const UserController = require('../controllers/user.controller')

router.get('/users', UserController.get)
router.post('/users', UserController.store)
router.get('/users/:id', UserController.show)
router.delete('/users/:id', UserController.remove)

module.exports = router;