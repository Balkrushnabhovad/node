const { create } = require("domain")
const http = require("http")

const server=http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
  
    const url= req.url
   res.setHeader("content-type","text/html")
    res.write("<html>")
    res.write("<head><title>this is header</title></head>")
    res.write('<body><form action="/abc" method="POST"><input type="text" name="message"></input><button>Submit</button></form></body>')
    res.write("</html>")
    res.end()
   
})
server.listen(3000)


