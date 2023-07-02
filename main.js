const writeTaskField = document.querySelector("#write__task");
const submitTaskButton = document.querySelector("#submit__task");
const todoListSpace = document.querySelector(".todolist__main");

document.addEventListener("DOMContentLoaded",function(){
    const savedItems = localStorage.getItem("todoList");

    if(savedItems){
        todoListSpace.innerHTML = savedItems;
        checkItems();
    }
})

writeTaskField.addEventListener("keydown", (e) => {
    if (e.key == "Enter") addTask()
});

submitTaskButton.addEventListener("click", addTask)


function addTask() {
    let taskWrapper = document.createElement("div");
    let task = document.createElement("div");
    let taskAttr = document.createElement("div");
    let check = document.createElement("i");
    let trash = document.createElement("i");

    taskWrapper.className = 'task__wrapper';
    task.className = 'task';
    taskAttr.className = 'task__attributes';
    check.id = "check";
    check.className = 'fa-solid fa-check-square';
    check.style.color = 'lightgray';
    trash.id = "trash";
    trash.className = 'fa-solid fa-trash';
    trash.style.color = 'lightgray';

    task.innerHTML = writeTaskField.value;
    taskWrapper.appendChild(task);
    taskAttr.appendChild(check);
    taskAttr.appendChild(trash);
    taskWrapper.appendChild(taskAttr);
    todoListSpace.appendChild(taskWrapper);

    check.addEventListener("click", function(){
        if(check.style.color === 'lightgray'){
            check.style.color = 'limegreen';
            task.style.textDecoration = 'line-through';
            localStorage.setItem("todoList", todoListSpace.innerHTML);
        }else {
            check.style.color = 'lightgray';
            task.style.textDecoration = 'none';
            localStorage.setItem("todoList", todoListSpace.innerHTML);
        }
    })

    trash.addEventListener("click", function(){
        taskWrapper.remove();
    })

    localStorage.setItem("todoList", todoListSpace.innerHTML);

    writeTaskField.value = '';
}

function checkItems(){
    const checks = document.querySelectorAll("#check");
    const trashes = document.querySelectorAll("#trash");

    checks.forEach(check => {
        check.addEventListener("click", function(){
            const task = item.parentElement.parentElement.querySelector('.task');
            if(check.style.color === 'lightgray'){
                check.style.color = 'limegreen';
                task.style.textDecoration = 'line-through';
                localStorage.setItem("todoList", todoListSpace.innerHTML);
            }else {
                check.style.color = 'lightgray';
                task.style.textDecoration = 'none';
                localStorage.setItem("todoList", todoListSpace.innerHTML);
            }
        })
        localStorage.setItem("todoList", todoListSpace.innerHTML);
    })

    trashes.forEach(trash => {
        trash.addEventListener("click", function(){
            const taskWrapper = trash.parentElement.parentElement.parentElement.querySelector('.task__wrapper');
            taskWrapper.remove();
            localStorage.setItem("todoList", todoListSpace.innerHTML);
        })
        localStorage.setItem("todoList", todoListSpace.innerHTML);
    })
}