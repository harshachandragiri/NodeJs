// const http=require('http')
const mongodb=require('mongodb').MongoClient
const url="mongodb://localhost:27017"

// const server=http.createServer((req,res)=>{


// })

// server.listen(5000,err=>{
//     if(err) throw err;
//     console.log("Server is running on 5000 port");
// })

let connectDb=async()=>{
    let connection=await mongodb.connect(url)
    console.log('database connected');
    let database=await connection.db('Node');
    console.log('DB Created');
    let collection=await database.createCollection('Node');
    console.log('Collection Created');
    collection.insertOne({name:'Harsha',age:21})
    console.log('created');
}
connectDb()