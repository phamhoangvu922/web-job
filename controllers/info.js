const infoService = require('../models/infoService')


module.exports.getInfo = async (req, res, next) => {
    const email = req.user;
    const result = await infoService.getInfo(email);
    res.render('info',{info: result,username: req.user, isLogin: req.isAuthenticated()});
    
}