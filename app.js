var express = require("express");
 
var app = express();
 
app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);
 
let homeRouter = require('./routes/home');
let contactRouter = require('./routes/contact');
let aboutRouter = require('./routes/about');
let blogRouter = require('./routes/blog');
let elementsRouter = require('./routes/elements');
let job_detailsRouter = require('./routes/job_details');
let job_listingRouter = require('./routes/job_listing');
let mainRouter = require('./routes/main');
let single_blogRouter = require('./routes/single-blog');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let chatRouter = require('./routes/chat');


app.use('/',homeRouter);
app.use('/contact',contactRouter);
app.use('/about',aboutRouter);
app.use('/blog',blogRouter);
app.use('/elements',elementsRouter);
app.use('/job_details',job_detailsRouter);
app.use('/job_listing',job_listingRouter);
app.use('/main',mainRouter);
app.use('/single-blog',single_blogRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/chat',chatRouter);


// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'webjob_data'
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!!!")
// });
// con.connect(function(err) {
//   //  if (err) throw err;
//     var sql = "SELECT * FROM congviec";
//     con.query(sql, function(err, results) {
//       if (err) {console.error("error connecting: " + err.stack); return;}
//       console.log(results);
//     })
//   });