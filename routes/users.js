var express = require('express');
const { getAllCourtsData } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/getAllCourtsData',getAllCourtsData)

module.exports = router;
