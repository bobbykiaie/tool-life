const express = require('express');

const router = express.Router();

const productsController = require('../controllers/product-controller');



router.get("/products", productsController.getProducts);

router.get('/products/:pid', productsController.getComponents);

router.get('/products/:pid/:cid', productsController.getOperations);

router.get('/products/:pid/:cid/:oid', productsController.getTools);

router.post('/products/:pid/:cid/:oid/postdata', productsController.postHandler);

router.get('/products/:pid/:cid/:oid/data', productsController.getData);

module.exports = router;