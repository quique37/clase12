const http = require('http')
const port = 8000

function responseHandler (request, response) {
    response.write('Hello World')
    response.end()
   
}

const server = http.createServer(responseHandler)
server.listen(port)

/*
http.createServer(function (req, res)) {
    response.write('Hello World')
    response.end()
}
*/



    



