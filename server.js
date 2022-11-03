const http = require('http');

 const server = http.createServer((req, res)=>{
    if ( req.url === '/'){
    res.write('Hello World');
    res.end();
    }
 });

 server.on('connection', (socket)=>{
  console.log('New Connection')
 });

 server.listen(3030);

 console.log ('listening on port 3030....');

