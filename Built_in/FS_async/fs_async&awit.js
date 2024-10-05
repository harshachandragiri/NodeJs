const fs=require('fs');

let readFile=async()=>{
    let data =await fs.readFile('./data.json',(err,data)=>{
        console.log(JSON.parse(data));
    })
}
readFile()

//Read File

let writefile=async()=>{
    await fs.writeFile('./writefile.js','Data is being written',(err)=>{
        if(err) throw err;
        console.log("File Written");
    })
}

writefile()