const http = require('http')
const fs = require('fs')
const { listenerCount } = require('process')
http.createServer(function(req, res){
  console.log(req.url)
  let writeHeadObject = {
    'Content-Type' : 'text/html'
  }
  res.writeHead(200, writeHeadObject)
  fs.readFile("index.html", function(err, data){
    if(err) {
      console.error('파일을 읽지 못했습니다.');
    }else {
      res.end(data);

}})}).listen(8080);