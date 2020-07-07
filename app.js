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


app.use('/',homeRouter);
app.use('/contact',contactRouter);
app.use('/about',aboutRouter);
app.use('/blog',blogRouter);
app.use('/elements',elementsRouter);
app.use('/job_details',job_detailsRouter);
app.use('/job_listing',job_listingRouter);
app.use('/main',mainRouter);
app.use('/single-blog',single_blogRouter);