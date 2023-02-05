const http = require("http");
const fs = require("fs")
const server = http.createServer((req , res)=>{
    const url = req.url;
    const method = req.method; 
    console.log("URL", url);
    