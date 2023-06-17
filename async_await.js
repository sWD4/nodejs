async function itm(){
    return 'hello'
}

let mits = async function(){
    return 'hello mits'
}

let rjit = async ()=>{
    return 'hello rjit'
}
// console.log(itm())
itm().then((result)=>{
  console.log(result)
})