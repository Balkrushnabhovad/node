const express =require("express");
const router =express.Router();


router.get("/add-product",( req,res,next)=>{
   
    res.send(
        "<form method='POST' action='/admin/add-product'><input type='text' name='title'><button type='submit'>add</button></form>");
   
});
router.post("/add-product",( req,res,next)=>{
    res.send("<h1>this is the product page </h1>")
    console.log(req.body)
    
    
 })
module.exports =router;