var box = document.getElementById("out");
var data = document.getElementById("data");


function addtask()
{
    var task = document.createElement("div");// create div element
    task.className = "task";

    var taskval = document.createElement("div");// create div element
    taskval.className ="taskval";

    var task_text =document.createElement("p");// create para element
    task_text.textContent = data.value;


    taskval.append(task_text);
    task.append(taskval);
    var butt = document.createElement("div");
    butt.className = "butt";
    var edirbtn = document.createElement("button");
    edirbtn.className = "edit";
    edirbtn.textContent = "Edit"
    butt.append(edirbtn);
    var deletebtn = document.createElement("button");
    deletebtn.className = "delete";
    deletebtn.textContent = "Delete"
    deletebtn.addEventListener("click", function(event){
        task.remove();
    })
    butt.append(deletebtn);
    task.append(butt);
    box.append(task);
    data.value = "";
}
