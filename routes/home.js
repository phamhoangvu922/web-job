//var express = require('express');
//var router = express.Router();

//router.get("/", function(req, res)  {
    
//    res.render("home");
//});
//module.exports = router;

var express = require('express')
var router = express.Router()
const controller = require('../controllers/index')
const job_controller = require('../controllers/job');
router.get('/', controller.index);
router.get('/job_details/id=:id',job_controller.job);


module.exports = router;