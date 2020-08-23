var express = require('express')
var bodyParser = require('body-parser')
var loginController = require('../controllers/login');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',loginController.logIn)
router.post('/',urlencodedParser,loginController.getLogIn)

//router.post('/',loginController.getLogIn)
module.exports = router;