const express = require("express");
const app = express();
const path = require("path")
const hbs = require('hbs');
// environment variable is use when it wont find port it will run with this
const port = process.env.PORT ||4000;
// public static path and by default index.html is first page 
const static_path = path.join(__dirname,"../Public")
//public path for handlebars and partials
const template_path = path.join(__dirname,"../templates/views")
// path for partials
const partials_path = path.join(__dirname,"../templates/partials")

// setting view engine with hbs
app.set('view engine', 'hbs')
// set views to templates path
app.set('views',template_path)
// registering partials 
hbs.registerPartials(partials_path)
app.use(express.static(static_path))
// routing 
app.get("", (req,res)=>{
    res.render("index")
})
app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/weather", (req,res)=>{
    res.render("weather")
})
// asteric operator is use when we show error when someone search some extra stuff on local storage
app.get("*", (req,res)=>{
    res.send("404error")
})
app.listen(port,()=>{
    console.log(`port is running fine at ${port}`)
})