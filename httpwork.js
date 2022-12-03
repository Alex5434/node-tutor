const http = require('http')

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end("Next page")
  }
  if(req.url === '/me'){
    res.end("Thos is end page")
  }
  if(req.url === '/about'){
    res.end("Thos is about page")
  }
  res.end(`
  <h1>404 error</h1>
  <p>Hi there</p>
  // <a href="/">Back Home</a>
  `)
  // res.end()
})

server.listen(5050)