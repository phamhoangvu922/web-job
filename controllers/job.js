const jobs = require('../models/jobService')
module.exports.job = async (req, res, next) => {
    const id = req.params.id;
    const result = await jobs.getByID(id);
   // console.log(result);
    res.render('job_details',{jobs: result[0], congty: result[1]});
}