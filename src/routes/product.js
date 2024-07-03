const express = require('express')
require('express-group-routes');
const router = express.Router();

const ProductController = require('../controllers/product.controller')

router.group("/api", (router) => {
    router.get('/products', ProductController.get)
    router.post('/products', ProductController.store)
    router.get('/products/:id', ProductController.show)
    router.delete('/products/:id', ProductController.remove)
})

module.exports = router;