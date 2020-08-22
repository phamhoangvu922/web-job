var express = require('express');
var router = express.Router();

/*router.get("/", function(req, res)  {
    
    res.render("job_listing");
});*/


const controller = require('../controllers/job_listing')
const job_controller = require('../controllers/job');
const category_controller = require('../controllers/category')
const type_controller = require('../controllers/type')
const location_controller = require('../controllers/location');

router.get('/',controller.job_listing);
router.get('/job_details/id=:id',job_controller.job);
/*router.get('/category=:id',category_controller.publishers);
router.get('/type=:id',type_controller.type);
router.get('/location=:id',location_controller.location);*/
router.get('/find',controller.getFind);

module.exports = router;