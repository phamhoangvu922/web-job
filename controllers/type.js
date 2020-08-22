
const typeService = require('../models/typeService');
module.exports.type = async (req, res, next) => {
    const type = req.params.id;
    const search = req.query.search;
    const page = req.query.page;
    const numbersOfBooksPerPage = 6;
        
    const result = await typeService.getType(type,search,page,numbersOfBooksPerPage);

    res.render('job_listing',{danhsach: result[0] ,numbersOfPages: result[1]});


}