/*var express = require('express');
var router = express.Router();

router.get("/", function(req, res)  {
    
    res.render("login");
});
module.exports = router;*/
var express = require('express')
var loginController = require('../controllers/login');
var router = express.Router();

router.get('/',loginController.logIn)
router.post('/',loginController.submitLogIn)
module.exports = router;