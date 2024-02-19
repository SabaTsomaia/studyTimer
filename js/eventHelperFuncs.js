// Html Elements
import * as HTML from './elements.js'

var title = '';
var timeCur = 0;
var session = 0;
var counter = 1;

// ELEMENTS OF ACTIVE TASKS
let activeTasks = []
var activeTask = 1;

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
    if(activeTask <= 0)
        return;
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
    if(counter % 2 !== 0)
    {
        HTML.task.classList.add('completed');
        counter++;
    }else 
    { 
        HTML.task.classList.remove('completed');
        counter++;
        console.log(e);
    }
}

export const deleteTask = function(e) {
    if(e.target.classList.contains('delIcon'))
    {
        e.target.closest('.task').remove();
    }
    activeTask--;
}


export const generateTask = function (title,session){  
    const html = `<div class="task">
    <img src="icons/task_alt_FILL0_wght400_GRAD0_opsz24.svg" alt="tasks" class="imgIcons" id="img-2">
        <p id="task-title">${title}</p>
        <p id="session-num">0/${session}</p>
    <img src="icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete" class="imgIcons delIcon" id="img-3">
</div>`
    HTML.taskContainer.insertAdjacentHTML('afterbegin',html);
    HTML.h2.innerHTML = `Working on ${title.toUpperCase()}`;
    activeTask++;
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
                timeCur = HTML.inputElements[i].value;
                HTML.inputElements[i].value = '';
                HTML.inputElements[i].placeholder= '00'
            }
            if(i == 2)
            {
                session = HTML.inputElements[i].value;
                HTML.inputElements[i].value = '';
                HTML.inputElements[i].placeholder= '00';
            }
            if (i == 3)
            {
                breakTime = HTML.inputElements[i].value;
                HTML.inputElements[i].value = '';
                HTML.inputElements[i].placeholder= '00';
            }
        } 
    }); 
    if(checking == true){
        generateTask(title,session);
        HTML.time.textContent = `${timeCur}:00`
        title = '';
    }
}

//export {toggleClass,clearInputs,startBtn,resetBtn,stopBtn,deleteTask,taskCompleted}
export * from './eventHelperFuncs.js';
