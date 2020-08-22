const categoryService = require('../models/categoryService');
module.exports.type = async (req, res, next) => {
    const category = req.params.id;
    const search = req.query.search;
    const page = req.query.page;
    const numbersOfBooksPerPage = 6;
        
    const result = await categoryService.getType(category,search,page,numbersOfBooksPerPage);

    res.render('job_listing',{danhsach: result[0] ,numbersOfPages: result[1]});


}