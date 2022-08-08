let inputTExt=document.querySelector("input");
let resultDiv=document.querySelector(".result");
let btn=document.getElementById("btn")
let array=[]
array=JSON.parse(window.localStorage.getItem("task")) 
getFromLocalStorage()
//when button is clicked
btn.onclick=function(){
    if(inputTExt.value!==""){
        addTaskToArray(inputTExt.value)
        inputTExt.value=""
    }
}
// add tasks to array
function addTaskToArray (input){
    const task={
        id:Date.now(),
        tittle:input,
        completed:false
    }
    array.push(task)
    addTaskToPage(array)
    setAtLocalStorage(array)
} 

//add tasks to the page
function addTaskToPage(array){
    resultDiv.innerHTML=""
    array.forEach(task => {
        let p =document.createElement("p")
        p.textContent=task.tittle
        resultDiv.appendChild(p)
        if(task.completed){
            p.className="completed"
        }
        p.setAttribute("data-id",task.id)
        let del=document.createElement("button")
        del.textContent="delete"
        del.className="del"
        p.appendChild(del)
        del.addEventListener("click",(e)=>{
            // remove from page 
            e.target.parentElement.remove()
            // remove from local
            removeFromLocal(e.target.parentElement.getAttribute("data-id"))
        })
    });
}

// set at local storage
function setAtLocalStorage(task){
    window.localStorage.setItem("task",JSON.stringify(task))
}

// gt from local storage
function getFromLocalStorage(){
    let localArray=JSON.parse(window.localStorage.getItem("task")) 
    addTaskToPage(localArray)
    return localArray
}
function removeFromLocal(taskId){
array=array.filter((task)=>task.id!=taskId)
setAtLocalStorage(array)
}
