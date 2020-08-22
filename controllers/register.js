var register = require('../models/registerService')

module.exports.register = function(req,res,next){
    res.render('register');
}

module.exports.registerComplete = function(req,res,next)
{
    register.getRegisterComplete(req,res,next);
}