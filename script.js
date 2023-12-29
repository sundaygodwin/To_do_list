const Task = document.getElementById("task");
const Duration = document.getElementById("duration");

const button= document.getElementById("btn");
button.addEventListener("click", function(){addTask()});

//todo unordered list html element
var myTask = document.getElementById("todo");




/*$(document).ready(function(){
    $('#myInput').blur(function(){
        var inputVal = $(this).val();
        if(inputVal.trim() === '') {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        }
    });
});*/

let myPlan = [];
updateSchedule(); 


 

// add task to array
function addTask(){
    if(Task.value === "" || Duration.value === ""){
       // alert("Please enter a schedule");
       $('#myModal').modal('show');
    }else{
    let name = Task.value;
    let time = Duration.value;
    schedulePair = {name, time};
    myPlan.push(schedulePair);
    updateSchedule(); 
    console.log(myPlan);
    };
    Task.value ="";
    Duration.value = "";
};

// Remove btn delete task from array
function removeTask(item){
    var index = myPlan.indexOf(item);

    if (index !== -1){
        myPlan.splice(index, 1);
    }
    updateSchedule();
}

function updateSchedule() {
    myTask.innerHTML ="";

    //Case empty array
    if (myPlan.length === 0){
        myTask.innerHTML = "NO SCHEDULE ON THE LIST" + '<br>' + "(Remember to take a break after a long work)";
    }

    // update Todo list
    myPlan.forEach ((item) => { 
        var tsk = document.createElement("span");
        tsk.setAttribute('id','Task');
        tsk.innerHTML = item.name;

        var dur = document.createElement("span");
        dur.setAttribute('id','Duration');
        dur.innerHTML = item.time;
        
        // create li
        let taskList = document.createElement('li');

        //create btn
        let deleteTask = document.createElement('button');
        deleteTask.textContent = "Delete";
        deleteTask.setAttribute('id', 'del-btn');
        deleteTask.addEventListener('click', () => removeTask(item));

       // Append task to list
       taskList.appendChild(tsk);
       
       taskList.appendChild(dur)
       taskList.appendChild(deleteTask);
       myTask.appendChild(taskList)
    });
};
