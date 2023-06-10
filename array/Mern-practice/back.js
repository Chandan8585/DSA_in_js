const http = require('http');
const server = http.createServer((req, res) =>{
      res.write("Welcome to nodeJs!")
      res.end()
}).listen(9000)