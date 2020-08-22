var login = require('../models/loginService')

module.exports.logIn = (req,res,next)=>{
    res.render('login');
}

// module.exports.getLogIn =  function(req,res,next){
//     login.getLogIn(req,res,next);

// }

console.log("DDDDDDDD");
module.exports.getLogIn =  async (req,res,next) =>{
    console.log("GET LOG IN");
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    const result = await login.getUser(email,password);
    console.log(result);
    if(result === 0){
        res.render('login', {announce: "Tài khoản hoặc mật khẩu không đúng"});
    }
    else{
        res.render('/' , {account: result[1]});
    }

}
console.log("EEEEEEEEEE");
