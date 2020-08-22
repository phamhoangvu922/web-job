//var express = require('express');
//var router = express.Router();

//router.get("/", function(req, res)  {
    
    //res.render("register");
//});
//module.exports = router;

var express = require('express')
var bodyParser = require('body-parser')
var registerController = require('../controllers/register')
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/', registerController.register)

router.post('/',urlencodedParser,registerController.registerComplete)
module.exports = router;