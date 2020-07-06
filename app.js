var express = require("express");
 
var app = express();
 
app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);
 
app.get("/", function(request, response)  {
    
    response.render("home");
});

app.get("/contact", function(request, response)  {
    
    response.render("contact");
});

app.get("/about",function(request,response){
    response.render("about")
});

app.get("/blog",function(request,response){
    response.render("blog")
});

app.get("/elements",function(request,response){
    response.render("elements")
});

app.get("/job_details",function(request,response){
    response.render("job_details")
});

app.get("/job_listing",function(request,response){
    response.render("job_listing")
});

app.get("/main",function(request,response){
    response.render("main")
});

app.get("/single-blog",function(request,response){
    response.render("single-blog")
});