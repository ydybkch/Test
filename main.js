let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = []
addButton.addEventListener("click", addTask);

function addTask(){
    let taskContent =taskInput.value;
    taskList.push(taskContent);
    render();
}

function render(){
    let resultHTML = '';
    let dddd
    for(let i = 0; i < taskList.length; i++){
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button> check</button>
            <button> Delete</button>
        </div>
    </div>`
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

// 4_3 동영상볼차례