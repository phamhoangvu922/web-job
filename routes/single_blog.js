var express = require('express');
var router = express.Router();

router.get("/", function(req, res)  {
    
    res.render("single_blog",{username: req.user, isLogin: req.isAuthenticated()});
});
module.exports = router;