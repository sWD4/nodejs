 const f = require('fs');

// // console.log(f);
//async
// f.readFile(__dirname+"/teacher.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// console.log("hello gwalior")

//sync
// const data = f.readFileSyn(__dirname+"/teacher.txt","utf-8")
// console.log(data);
// console.log("hello Itm");
try {
    const data = f.readFileSync(__dirname+"/teacher.txt","utf-8")
console.log(data);

} catch (error) {
    console.log(error);
    
}
console.log("hello Itm");