const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='./'){
        res.end('hello welcome to my portfolio')
    }
 if(req.url==='/about'){
    res.end('hello welcome to my about page')
 }
 res.end(`

 <h1>Oooops! wrong page</1>
 <p>We can't find the page y're looking for</p>
 <a href ="/"> back home</a>
 `)
})
server.listen(5000);