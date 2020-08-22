const pool = require('../connection');

// module.exports.getLogIn = function(req,res,next){
//     pool.connect(function(err, client, done){  
//         client.query('SELECT * FROM "users"  WHERE "email"='+ '\'' + req.body.email + '\'' , function (err, result) {
//             if(err){
//                 return console.log('error running query', err);
//             }
//             if(result.rows[0] !== undefined)
//             {
//                 console.log(result.rows[0]);
//                 console.log(req.body.password);
//                 if(result.rows[0].password == req.body.password){
//                     done();
//                     res.render('/' , {account : result.rows[0].email});
//                 }
//                 else{
//                     res.render('login' , {announce: "Mật khẩu không đúng"});
//                 }
//             }
//             else
//             {
//                 res.render('login' , {announce: "Tài khoản không tồn tại"});
//             }
//         });
//     });
// }

module.exports.getUser = async (email,password) =>{
    console.log("VVVVVVVVVVV");
    const client = await pool.connect();
    try {
        const nguoidung = await client.query('SELECT * FROM "users"  WHERE "email"='+ '\'' + email + '\'');
            console.log(nguoidung);
            if(nguoidung !== undefined){
                if(nguoidung.rows[0].password == password){
                    client.release();
                    return [1,nguoidung];
                }
                else{
                    client.release();
                    return 0;
                }
            }
            else{
                client.release();
                return 0;
            }

    } catch (error) {
        console.log(error);
    }
}