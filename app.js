const http = require('http')
const fs = require('fs')
const url = require('url')
http.createServer(function(req, res){
  var pathname = url.parse(req.url).pathname;
  console.log(req.url)
  console.log(req.method)
  let writeHeadObject = {
    'Content-Type' : 'text/html'
  }
  if(pathname==='/' && req.method === 'GET'){
  res.writeHead(200, writeHeadObject)
  fs.readFile("index.html", function(err, data){
    if(err) {
      console.error('파일을 읽지 못했습니다.');
    }else{
      res.end(data);}})}
      else if(pathname === '/index1.html') {
        res.writeHead(200, writeHeadObject)
        fs.readFile("index1.html", function(err, data){
          if(err) {
            console.error('파일을 읽지 못했습니다.');
          }else {
            res.end(data);}})}
            else if(pathname === '/index2.html') {
              res.writeHead(200, writeHeadObject)
              fs.readFile("index2.html", function(err, data){
                if(err) {
                  console.error('파일을 읽지 못했습니다.');
                }else {
                  res.end(data);}})}
                  else if(pathname === '/index3.html') {
                    res.writeHead(200, writeHeadObject)
                    fs.readFile("index3.html", function(err, data){
                      if(err) {
                        console.error('파일을 읽지 못했습니다.');
                      }else {
                        res.end(data);}})}
                        else if(pathname === '/index4.html') {
                          res.writeHead(200, writeHeadObject)
                          fs.readFile("index4.html", function(err, data){
                            if(err) {
                              console.error('파일을 읽지 못했습니다.');
                            }else {
                              res.end(data);}})}

  if (req.url === '/style.css') {
  fs.readFile('style.css', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found');
      return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      return res.end();
      });

    
    
}}).listen(8080);
