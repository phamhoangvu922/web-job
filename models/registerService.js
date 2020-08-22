const pool = require('../connection');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports.getRegisterComplete = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT * FROM "users"  WHERE "email"='+ '\'' + req.body.email + '\'' , function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                console.log(result);
                let announce;
                if(result.rows[0].email === req.body.email)
                {
                    announce = "Email đã tồn tại";
                }
                res.render('register',{announce});
                
             }
            else
            {
                const password = req.body.password;
                const name = req.body.name;
                const email = req.body.email;
                const bio = req.body.bio;
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "users" VALUES (' + '\'' + name + '\',\'' + email+ '\',\'' +hash + '\',\''+  bio + '\');', function (err, result) {
                            done();
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.render('register-complete');
                        });
                    });
                }); 
            }
        });
    });
}