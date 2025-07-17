const add=()=>{

const taskInput=document.getElementById("taskInput");
const task=taskInput.value;

taskInput.value=""
if(task !="")

display(task)
console.log(task)

}

var counter=1;
const display=(task)=>{
    const taskcont=taskcontainer=document.getElementById("taskcontainer");

    let taskId=`task${counter}`
    

//create elements
    let taskbody=document.createElement('div')
    let taskName=document.createElement('p')
    let deleteIcon=document.createElement('i')

    taskbody.id=taskId
    //assign the task
     taskName.textContent=task

//adding class name
taskbody.classList="w-full h-10  flex justify-between items-center px-2"
deleteIcon.classList="ri-delete-bin-line text-red-500"


//adding event listener
deleteIcon.addEventListener("click",()=>{
console.log("delete")
deleteTask(taskId)
})

//green color
taskName.addEventListener("click",()=>{
    taskDone(taskId)
})

    taskbody.appendChild(taskName)
    taskbody.appendChild(deleteIcon)

        taskcont.appendChild(taskbody)
counter++;
}

const deleteTask=(taskId)=>{
    document.getElementById(taskId).remove();
}
//green funtion
const taskDone=(taskId)=>{
    const task=document.getElementById(taskId);
    const task_ptag=task.querySelector('p')
    
     task_ptag.classList.toggle("text-green-600")
    task_ptag.classList.toggle("line-through")
  
}

