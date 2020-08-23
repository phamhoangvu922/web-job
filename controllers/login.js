const loginService = require('../models/loginService');

module.exports.logIn = (req,res,next)=>{
    console.log("LOGIN")
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
    const result = await loginService.getUser(email,password);
    console.log("Email: ",email);
    console.log(password);
    if(result[0] == 0){
        console.log("Đăng nhập thất bại");
        res.render('login', {announce: "Tài khoản hoặc mật khẩu không đúng"});
    }
    else{
        console.log("Đăng nhập thành công");
        res.render('login-complete', {account: result[1] , isLogin: true});
    }
}
console.log("EEEEEEEEEE");

