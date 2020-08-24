var express = require("express");
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var bodyParser = require("body-parser")
var passport = require('passport');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(express.static("public"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//app.listen(3000);
const port = 3000;


let homeRouter = require('./routes/home');
let contactRouter = require('./routes/contact');
let aboutRouter = require('./routes/about');
let blogRouter = require('./routes/blog');
let elementsRouter = require('./routes/elements');
//let job_detailsRouter = require('./routes/job_details');
let job_listingRouter = require('./routes/job_listing');
let mainRouter = require('./routes/main');
let single_blogRouter = require('./routes/single_blog');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
var logOutRouter =require('./routes/logout');
let chatRouter = require('./routes/chat');
let infoRouter = require('./routes/info');

app.use('/', homeRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/elements', elementsRouter);
//app.use('/job_details', job_detailsRouter);
app.use('/job_listing', job_listingRouter);
app.use('/main', mainRouter);
app.use('/single_blog', single_blogRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/logout',logOutRouter);
app.use('/chat',chatRouter);
app.use('/info',infoRouter);


app.set('port', process.env.port || port);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});




module.exports = app;
