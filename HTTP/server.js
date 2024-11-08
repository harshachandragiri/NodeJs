// how to serve html file using Callback

const http=require('http');
const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     fs.readFile('./data.html',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             res.writeHead(200,{'Content-Type':'text/html'})
//             res.end(data)
//         }
//     })
   
//     })
//     server.listen(5000,err=>{
//         if(err) throw err;
//         console.log("Server listening on port 5000");
// })

// const server=http.createServer((req,res)=>{
//     const data=fs.createReadStream('./data.css')
//     res.writeHead(200,{'Content-Type':'text/css'})
//     data.pipe(res);

// })
// server.listen(5000,err=>{
//     if(err) throw err;
//     console.log("Server listening in port 5000");
// })

const server=http.createServer((req,res)=>{
    const data=fs.createReadStream('./data.css')
    res.writeHead(200,{'Content-Type':'text/css'})
    data.pipe(res);

})
server.listen(5000,err=>{
    if(err) throw err;
    console.log("Server listening in port 5000");
})