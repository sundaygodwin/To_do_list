const Task = document.getElementById("task");
const Duration = document.getElementById("duration");

const button= document.getElementById("btn");
button.addEventListener("click", function(){createTask()});

//todo unordered list html element
const Todo = document.getElementById("todo");

let myPlan = [];
 
function createTask(){
    let len = myPlan.length;
    
    myPlan.push({
        myTask:Task.value,
        time: Duration.value}
    );

    let tsk = document.createElement("span");
    tsk.setAttribute('id','Task');
    tsk.innerHTML = myPlan[len].myTask;

    let dur = document.createElement("span");
    dur.setAttribute('id','Duration');
    dur.innerHTML = myPlan[len].time;

    const btn = document.createElement("button");
    btn.setAttribute('id','del-btn')
    btn.innerHTML = "Delete";

    const li = document.createElement("li");
    li.setAttribute('id','list');

    
    
    const fragment= document.createDocumentFragment();
    const myList = fragment.appendChild(li);
    myList.appendChild(tsk);
    myList.appendChild(dur);
    myList.appendChild(btn);


    Todo.appendChild(fragment);
    
    btn.addEventListener("click", function(){
        Todo.removeChild(myList);
        myPlan.splice(len, 1);
    });

    
    Task.value = "";
    Duration.value="";

   
    
    //list.innerHTML = myPlan[0].myTask + " " + myPlan[0].time + " " + btn.innerHTML + "<br>";
    //Todo.innerHTML += list.innerHTML;
    
    console.log(myPlan);
}