import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
var value;
var value2;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});

app.get("/view",(req,res)=>{
    res.render("view.ejs",{
        string:value,
    });
});

app.get("/update",(req,res)=>{
    res.render("update.ejs",{
        getvalue:value,
    });
});

app.get("/delete",(req,res)=>{
    value=null;
    res.render("index.ejs");
});

app.post("/",(req,res)=>{
    value=req.body.create
    res.render("index.ejs");
});

app.post("/updating",(req,res)=>{
    value=req.body.update;
    res.render("index.ejs");
});


app.listen(port,()=>{
    console.log("listensing to port",port);
});