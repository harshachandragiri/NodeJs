const fs = require("fs");

//// Read File

// let data = fs.readFile("./readfile.txt", "utf-8", (err, data1) => {
//     if (err) {
//         console.log("it an error");
//     }
//     else {
//         console.log(data1);
//     }

// })

//// Write File 

// fs.writeFile("./writefile.txt","This is a Write File",err=>{
//     fs.readFile("./readfile.txt", "utf-8", (err, data1) => {
//         if (err) {
//             console.log("it an error");
//         }
//         else {
//             console.log(data1);
//         }
    
//     })
    
// });

// // Append a File
// fs.appendFile('./readfile.txt','new Data of Async',(err)=>{
//     if(err){
//         console.log("Error");
//     }
// });
// console.log("Done");

//Delete a file 

// fs.unlink('./writefile.txt',()=>{
//     console.log("File is Deleted");
// })

// Rename a File
// fs.rename('./readfile.txt','modifiedName',()=>{
//     console.log("Renamed");
// })

// const fs =require('fs');
fs.mkdir('./AC',err=>{
    if(err) throw err;
    console.log("Folder is Created");
    fs.mkdir('./AC/NotWorking',err=>{
        if(err) throw err;
        console.log("Nested Folder is Created ");
        fs.writeFile('./AC/NotWorking/CallTechnician.js',"Not picking The call..",err=>{
            if(err) throw err;
            console.log("File is Created");
        })
    
    })
})

