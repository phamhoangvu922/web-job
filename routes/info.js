var express = require('express');
var router = express.Router()

router.get("/", function(req, res)  {
    
    res.render("info",{username: req.user, isLogin: req.isAuthenticated()});
});
module.exports = router;