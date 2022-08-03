const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/add-post',adminController.getAddPost)

router.post(
    '/add-post',
    adminController.postAddProduct
  );

module.exports = router;