const AddTaskBtn = document.getElementById('addTask')
const TaskTextField = document.getElementById("task")
let taskArray = [];
//dataget
let objStr = localStorage.getItem('tasks')
//console.log(objStr)
if(objStr != null){
    console.log(objStr)
}

AddTaskBtn.onclick= ()=>{
    const task = TaskTextField.value;
    taskArray.push({'taskname': task})
   //console.log(taskArray)
    //alert(task)
    SaveTask(taskArray)
}

function SaveTask(taskArray){
    //console.log(taskArray)
    let str = JSON.stringify(taskArray)
    //console.log(str)
    localStorage.setItem('tasks',str)
}