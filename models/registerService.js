const pool = require('../connection');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports.getRegisterComplete = function(req,res,next){
    let announce = '';
    pool.connect(function(err, client, done){  
        client.query('SELECT * FROM "users"  WHERE "email"='+ '\'' + req.body.email + '\'' , function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                if(result.rows[0].email === req.body.email)
                {
                    announce = "Email đã tồn tại";
                }
                res.render('register',{announce,username: req.user, isLogin: req.isAuthenticated()});
                
             }
            else
            {
                const password = req.body.password;
                const name = req.body.name;
                const date = req.body.date;
                const email = req.body.email;
                const bio = req.body.bio;
                const phone = req.body.phone;
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "users" VALUES (' + '\'' + name + '\',\'' + date+ '\',\'' + email+ '\',\'' +hash + '\',\''+  phone + '\',\''+  bio + '\');', function (err, result) {
                            done();
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.render('register-complete',{username: req.user, isLogin: req.isAuthenticated()});
                        });
                    });
                }); 
            }
        });
    });
}