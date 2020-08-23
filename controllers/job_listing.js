const list = require('../models/job_listingService');
module.exports.getFind = async (req,res,next)=>{
    const category = req.query.category;
    const type = req.query.type;
    const location = req.query.location;
    const page = 1;
    const numbersOfJobsPerPage = 6;
  
    const result = await list.getFind(category,type,location,page,numbersOfJobsPerPage);
    res.render('job_listing',{jobs: result[0], numbersOfPages: result[1], username: req.user, isLogin: req.isAuthenticated()});
  
  }

  module.exports.job_listing = async (req, res, next) => {
    const search = req.query.search;
    const page = 1;
    const numbersOfJobsPerPage = 6;
  
    const result = await list.getJob_listing(search,page,numbersOfJobsPerPage);
    res.render('job_listing',{jobs: result[0], numbersOfPages: result[1], username: req.user, isLogin: req.isAuthenticated() });
}
//req.query.page
