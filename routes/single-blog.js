var express = require('express');
var router = express.Router();

router.get("/", function(req, res)  {
    
    res.render("single-blog");
});
module.exports = router;