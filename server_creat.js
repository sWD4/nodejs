const h = require('http')

// console.log(h)
const server =h.createServer(function(req,res){
    res.write('welcome nodejs,javascript');
    res.write('Hello ');
    res.end();
}).listen(3000,()=>console.log('server is running localhost:3000'))

// localhost:3000 live server