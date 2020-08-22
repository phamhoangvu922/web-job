var express = require('express')
var bodyParser = require('body-parser')
var loginController = require('../controllers/login');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("AAAAAAAAAAAAA")
router.get('/',loginController.logIn)
console.log("BBBBBBB")
router.post('/',urlencodedParser,loginController.getLogIn)
console.log("CCCCCCCCCCCCC")
// router.post('/',loginController.getLogIn)
module.exports = router;