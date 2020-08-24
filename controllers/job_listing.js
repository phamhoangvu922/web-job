const list = require('../models/job_listingService');
module.exports.getFind = async (req,res,next)=>{
    const category = req.query.category;
    const type = req.query.type;
    const location = req.query.location;
    const page = req.query.page;
    const search = req.query.search;
    const numbersOfJobsPerPage = 6;
  
    const result = await list.getFind(search,category,type,location,page,numbersOfJobsPerPage);
    res.render('job_listing',{jobs: result[0], numbersOfPages: result[1],search: search, username: req.user, isLogin: req.isAuthenticated()});
  
  }

  module.exports.job_listing = async (req, res, next) => {
    const page = req.query.page;
    const numbersOfJobsPerPage = 6;
    const search = req.query.search;
      
    const result = await list.getJob_listing(search,page,numbersOfJobsPerPage);
    console.log(result[0], result[1]);
    res.render('job_listing',{jobs: result[0], numbersOfPages: result[1],search: search, username: req.user, isLogin: req.isAuthenticated() });
}
//req.query.page
