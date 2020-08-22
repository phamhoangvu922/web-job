const locationService = require('../models/locationService');
module.exports.type = async (req, res, next) => {
    const location = req.params.id;
    const search = req.query.search;
    const page = req.query.page;
    const numbersOfBooksPerPage = 6;
        
    const result = await locationService.getType(location,search,page,numbersOfBooksPerPage);

    res.render('job_listing',{danhsach: result[0] ,numbersOfPages: result[1]});


}