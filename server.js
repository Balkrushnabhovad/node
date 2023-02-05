const http=require("http");
const express=require("express");
const path =require("path")
const adminRoute= require('./Routes/adminRoutes')
const shopRoute=require('./Routes/ShopRoutes')


const bodyParser = require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended:true}))
app.use("/admin" ,adminRoute)
app.use("/",shopRoute)


// const requestHandler =require("./route");
// const  server =http.createServer(requestHandler);
app.use(( req,res,next)=>{
// res.status(404).send("<h2>this page not found</h2>")
res.status(404).sendFile(path.join(__dirname, "./","/view","/404.html"))
   
})


// app.use("/add-product",( req,res,next)=>{
   
//     res.send(
//         "<form method='POST' action='/product'><input type='text' name='title'><button type='submit'>add</button></form>");
   
// });


// app.post("/product",( req,res,next)=>{
//    console.log(req.body)
//     res.send("<h1>this is the product page </h1>")
   
// })


// app.use("/",( req,res,next)=>{
//     res.send("<h1>this is the home  page </h1>")
    
// })

const server=http.createServer(app);
server.listen(3000);    