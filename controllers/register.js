var register = require('../models/registerService')

module.exports.register = function(req,res,next){
    let announce ='';
    res.render('register', {announce, username: req.user, isLogin: req.isAuthenticated()});
}

module.exports.registerComplete = function(req,res,next)
{
    register.getRegisterComplete(req,res,next);
}