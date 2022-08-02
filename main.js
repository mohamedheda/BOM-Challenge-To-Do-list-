let inputTExt=document.querySelector("input");
let resultDiv=document.querySelector(".result");
let btn=document.getElementById("btn")
let newArr=[]
let count=0
btn.onclick=function(){
    set(inputTExt);
    getBack(count);
    count+=1
}
//function for set tasks in local stoarge
function set (inputTExt){
    let task={
        theID:`${Math.random()*10**17}`,
        theTitle:`${inputTExt.value}`
    }
    newArr.push(task)
    window.localStorage.setItem("task",JSON.stringify(newArr))
}
//function for get tasks from local stoarge
function getBack(co) {
    let ob=JSON.parse(window.localStorage.getItem("task")) 
    let p=document.createElement("p")
        p.textContent=ob[co].theTitle
        resultDiv.appendChild(p)
    let delBtn=document.createElement("button")
    delBtn.className="del"
    p.appendChild(delBtn)
    delBtn.textContent="delete"
    delBtn.onclick=function(){
        p.remove()
    }
}




