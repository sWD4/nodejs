const AddTaskBtn = document.getElementById('addTask')
const TaskTextField = document.getElementById("task")
const recordsdisplay = document.getElementById('records')

let taskArray = [];
//dataget
let objStr = localStorage.getItem('tasks')
//console.log(objStr)
if(objStr != null){
    //console.log(objStr)
    taskArray = JSON.parse(objStr)
}
displayTask()
//console.log(taskArray)

AddTaskBtn.onclick= ()=>{
    const task = TaskTextField.value;
    taskArray.push({'taskname': task})
   //console.log(taskArray)
    //alert(task)
    SaveTask(taskArray)
    TaskTextField.value = ''
    displayTask()
}

function SaveTask(taskArray){
    //console.log(taskArray)
    let str = JSON.stringify(taskArray)
    //console.log(str)
    localStorage.setItem('tasks',str)
    displayTask()
}

function displayTask(){
    let data = ''
    taskArray.forEach((user,i)=>{
        data += `<tr>
           <th scope="row">${i+1}</th>
           <td>${user.taskname}</td>
           <td>
           <i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> 
           <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i>
           </td>
         </tr>`;
    })
    //console.log(data)
    recordsdisplay.innerHTML = data 
}
function DeleteInfo(id){
    //alert(id)
    taskArray.splice(id,1)
    SaveTask(taskArray)
}