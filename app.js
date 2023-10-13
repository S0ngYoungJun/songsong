const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
  console.log(request.url)
  let writeHeadObject = {
    'Content-Type' : 'text/html'
  }
  res.writeHead(200, writeHeadObject)
})