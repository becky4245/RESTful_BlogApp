var express= require("express"),
    methodOverride=require("method-override"),
    expressSanitizer=require("express-sanitizer");
    app=express(),
    bodyParser=require("body-parser"),
    mongoose=require("mongoose")

// APP CONFIG

//mongoose.connect("mongodb://loacalhost/blog_app");
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true });

app.set("view engine","ejs");

app.use(express.static("image"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// MONGOOSE /MODEL CONFIG
var blogSchema= new mongoose.Schema({
    title:String,
    image: String,
    body:String,
    special_thanks: String,
    created: {type :Date,default:Date.now}
});

var Blog=mongoose.model("Blog",blogSchema);

//RESTFUL ROUTES
// Initial creation
// Blog.create({
//      title:"My First Post",
//      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjZT1Kb01WUtO6jlYxzvX2b88Ao6qtnxGm2Qoe0a8p-f1CrClT&usqp=CAU",
//      body:"When you don't know what to do, you write.",
//      special_thanks:"@nitika"
// });

app.get("/",function(req,res){
   res.redirect("/blogs"); 
});

app.get("/blogs",function(req,res){
    Blog.find({},function(err,blogs){
        if(err)
        {
            console.log("err");
        }else{
            res.render("index",{blogs: blogs});
        }
    });
});

//NEW ROUTE
app.get("/blogs/new",function(req,res)
{
    res.render("new");
});

//CREATE ROUTE
// for wen we click submit
app.post("/blogs",function(req,res)
{
    //create blog Blog.Create(data,callback)
    //inside neww.ejs we have blog[image] so data is req.body.blog
    console.log(req.body);
    //req.body.blog.body=req.sanitize(req.body.blog.body);
    console.log(req.body);
    Blog.create(req.body.blog,function(err,newBlog)
    {
        if(err)
        {
            res.render("new");
        }else{
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE

app.get("/blogs/:id",function(req,res){
    //res.send("Show Page");
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("show",{blog:foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit",function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("edit",{blog:foundBlog});
        }
    });
});

// UPDATE ROUTE

app.put("/blogs/:id",function(req,res){
    //res.send("update")
    req.body.blog.body=req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,FupdatedBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.redirect("/blogs/" + req.params.id);
            // redirected to the show page
        }
    });
});

// DELETE ROUTE
// we can also do like app.get("/blogs/:id/delete")
app.delete("/blogs/:id",function(req,res){
   // res.send("You have reched")
   Blog.findByIdAndRemove(req.params.id,function(err){
    if(err){
        res.redirect("/blogs");
    }
    else{
        res.redirect("/blogs");
        
    }
   });
});

app.listen(1999,function()
{
    console.log("App has started");
});
