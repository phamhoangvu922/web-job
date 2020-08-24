var express = require('express');
var router = express.Router()
const controllerInfor = require('../controllers/info')

router.get("/", controllerInfor.getInfo);
module.exports = router;