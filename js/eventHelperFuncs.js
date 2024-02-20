// Html Elements
import * as HTML from './elements.js'

let title = '';
let hours = 0;
let minutes = 0;

// ELEMENTS OF ACTIVE TASKS
const tasks = []

export const toggleClass = function (mode) {
    if(mode === true) {
        setTimeout(() => {
        HTML.taskSetting.classList.add('hidden');
        HTML.overlay.classList.add('hidden');
        },100);
    } else {
        setTimeout(() => {
        HTML.taskSetting.classList.remove('hidden');
        HTML.overlay.classList.remove('hidden');
        },100);
    }
}
export const startBtn = function() {
    timeCur -= 1;
    let seconds = 60;

    var id = setInterval(function () {
            HTML.time.textContent = `${timeCur}:${--seconds}`
            if(timeCur == 0 && seconds === 0)
            {
                clearInterval(id);
            } 
            else if(seconds === 0)
            {
                timeCur--;
                seconds = 60;
            }
        },1000)
}

export const stopBtn = function(){
    console.log('stop');
}

export const resetBtn = function(){
    console.log('reset');
}

export const taskCompleted = function(e) {
    /* 
    Loop through the taskList and toggle: HTML.task.classList.add('completed');
     */
}

export const deleteTask = function(e) {
    if(e.target.classList.contains('delIcon'))
    {
        e.target.closest('.task').remove();
    }
    for (let i = 0; i < tasks.length;i++) {
        const element = tasks[i];
        console.log(element);
    }
    removeTask()
}


export const generateTask = function (title){  
    const html = `<div class="task">
    <img src="icons/task_alt_FILL0_wght400_GRAD0_opsz24.svg" alt="tasks" class="imgIcons" id="img-2">
        <p id="task-title" style="margin: 3px auto 0px 10px;">${title}</p>
    <img src="icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete" class="imgIcons delIcon" id="img-3">
</div>`
    HTML.taskContainer.insertAdjacentHTML('afterbegin',html);
}

function addTask(title,hours,minutes){
    const task = {
        title: title,
        hours: hours,
        minutes: minutes
    };

    tasks.push(task)
}

function removeTask(){
    tasks.pop();
}


export const clearInputs = function (checking) {
    HTML.inputElements.forEach((_,i) => {
        if(checking == true){
            if(i == 0)
            {
                title = HTML.inputElements[i].value;
                HTML.inputElements[i].value='';  
                HTML.inputElements[i].placeholder='Name a task....';
            }
            if(i == 1)
            {    
                hours = HTML.inputElements[i].value;
                HTML.inputElements[i].value = '';
                HTML.inputElements[i].placeholder= '00'
            }
            if(i == 2)
            {
                minutes = HTML.inputElements[i].value;
                HTML.inputElements[i].value = '';
                HTML.inputElements[i].placeholder= '00'
            }
        } 
    }); 
    if(checking == true){
        generateTask(title);
        addTask(title,hours,minutes)
        title = 0
        hours = 0
        minutes = 0
    }

}

//export {toggleClass,clearInputs,startBtn,resetBtn,stopBtn,deleteTask,taskCompleted}
export * from './eventHelperFuncs.js';
