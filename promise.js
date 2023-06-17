function pro(complete){
return new Promise(function(res,rej){
    console.log('fetching data,please wait')
    setTimeout(()=>{
        if(complete){
            res('I am succesful')
        }
        else{
            rej('I am failed')
        }
    },3000)
    
})
}
  pro(false).then((result)=>{
console.log(result)
  }).catch((error)=>{
    console.log(error)
  })
  console.log("hello")

// console.log(pro(true));