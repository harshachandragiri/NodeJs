// Fs :If we need to interact with the files in our Operating System then we will use Fs module.

//import fs module
const fs=require('fs')

// console.log(fs);

// file operations 
//read operations 

// // read file
// let data=fs.readFileSync('./nodetxt','utf-8')
// console.log(data);

// //write file
// fs.writeFileSync('./node1.txt','data yo want to write')

//append file
// fs.appendFileSync('./node2.txt','appending a File')

// let data1=fs.readFileSync('./node.txt','utf-8')

// console.log("Reading file is successfull")

// fs.appendFileSync('./Nodejs.txt',data1)

// console.log('Data1 is appended') 


// Delete file

// fs.unlinkSync('./node1.txt');
// console.log("Deleted");

//Rename File 
// fs.renameSync('node2.txt','nodejs.txt');
// console.log("Renamed");

//new folder
// fs.mkdirSync('./Express');
// console.log("Folder Created");


//Folder inside folder 
// fs.mkdirSync('./Express/node_2pm');
// console.log("Folder inside folder created");

//file inside nested folder
// fs.writeFileSync('./Express/node_2pm/newnode.js','node');
// console.log("file inside nested folder");


// fs.mkdirSync('./Remove');

//Removing a Folder
// fs.rmdirSync('./Remove')
// console.log("Folder is removed successfully");


//Task 1

// fs.mkdirSync('./Routes');
// console.log("Done");

// fs.writeFileSync('./Routes/route.js',"Some random");
// console.log('done');

// fs.renameSync('./Routes/route.js','./Routes/route.txt');
// console.log("Done");



//TASK 2

// fs.mkdirSync('./Controller');
// fs.writeFileSync('./Controller/controller.js',"Controller file");

// fs.mkdirSync('./Views');
// fs.writeFileSync('./Views/Views.js',"Views file");

// fs.mkdirSync('./model');
// fs.writeFileSync('./model/model.js',"model file");


// fs.mkdirSync('./node');

// fs.writeFileSync("./node/nodexy.js","Node js is an OPen source environment");

// console.log("Done");

//Task 3

// fs.mkdirSync("./Nodejs");
// console.log("Done");

// fs.mkdirSync("./Nodejs/Expressjs");
// console.log("Done");

// fs.mkdirSync("./Nodejs/Expressjs/JavaScript");
// console.log("Done");

// fs.mkdirSync("./Nodejs/Expressjs/JavaScript/Java");
//  console.log("Done");



// fs.writeFileSync("./Nodejs/Expressjs/JavaScript/Java/Data.js","Some Random data");
//  console.log("Done");

// let data=fs.readFileSync('./node/nodexy.js','utf-8');

// fs.appendFileSync('./Nodejs/Expressjs/JavaScript/Java/Data.js',data);
// console.log("Done");








