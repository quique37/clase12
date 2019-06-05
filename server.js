const http = require('http')
const port = 9000

const url = require('url')
const myURL = url.parse('https://example.org/abc/xyz?123s')
 
    const server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(myURL.pathname)
        res.end()
    })
     
        server.listen(port)
        
  
