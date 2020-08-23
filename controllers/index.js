const index = require('../models/indexService')
module.exports.index =async (req, res, next) => {
    const result = await index.getIndex();
    res.render("home",{jobs: result, username: req.user, isLogin: req.isAuthenticated()});
}