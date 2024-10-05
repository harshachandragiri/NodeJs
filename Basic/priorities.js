setTimeout(()=>{
    for(let i=0;i<1;i++){
        console.log("First")
        console.log("We love Nodejs")
    }
},1000)

console.log("Third")

const fs=require('fs')

fs.readFile('./priorities.html',(err,data)=>{
    console.log(data.toString())
})


console.log("Second")