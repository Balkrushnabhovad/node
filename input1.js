const http = require("http");
const fs = require("fs")
const server = http.createServer((req , res)=>{
    const url = req.url;
    const method = req.method; 
    console.log("URL", url);
    res.setHeader("content-type", "text/html");

    if (url == "/message" && method == "POST"){
    res.setHeader("location", "/");
    const body = [];
    req.on("data", (chunks)=>{
        body.push(chunks);
    })
    req.on("end",()=>{
        const parseBody= Buffer.concat(body).toString();
        const message = parseBody.split("=")[1]
        fs.writeFileSync("message.txt", message)
    })
    res.statusCode =302;
        res.end();
        return;
    }
    res.write("<html><h1>this is home</h1></html>")
    res.write("<html><body><form action = '/message' method = 'POST'><label>enter a message : </label><input type = 'text' name= 'myName'></input><button>Submit</button></body></html>")
    res.end();

});

server.listen(3000);