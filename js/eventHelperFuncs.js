// Html Elements
import {taskSetting,overlay,inputElements,taskContainer, time,task} from "./elements.js"

var title = '';
var timeCur = 0;
var session = 0;
var breakTime = 0;
var counter = 1;
var activeTask = 0;

const toggleClass = function (mode) {
    if(mode === true) {
        setTimeout(() => {
        taskSetting.classList.add('hidden');
        overlay.classList.add('hidden');
        },100);
    } else {
        setTimeout(() => {
        taskSetting.classList.remove('hidden');
        overlay.classList.remove('hidden');
        },100);
    }
}
const startBtn = function() {
    if(activeTask <= 0)
        return;
    timeCur -= 1;
    let seconds = 60;
    var id = setInterval(function () {
            time.textContent = `${timeCur}:${--seconds}`
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

const stopBtn = function(){
    console.log('stop');
}

const resetBtn = function(){
    console.log('reset');
}

const taskCompleted = function(e) {
    if(counter % 2 !== 0)
    {
        task.classList.add('completed');
        counter++;
    }else 
    { 
        task.classList.remove('completed');
        counter++;
        console.log(e);
    }
}

const deleteTask = function(e) {
    if(e.target.classList.contains('delIcon'))
    {
        e.target.closest('.task').remove();
    }
    activeTask--;
}

const generateTask = function (title,session){ 

    const html = `<div class="task">
    <img src="icons/task_alt_FILL0_wght400_GRAD0_opsz24.svg" alt="tasks" class="imgIcons" id="img-2">
        <p id="task-title">${title}</p>
        <p id="session-num">0/${session}</p>
    <img src="icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete" class="imgIcons delIcon" id="img-3">
</div>`
    taskContainer.insertAdjacentHTML('afterbegin',html);
    activeTask++;
}

const clearInputs = function (checking) {
    inputElements.forEach((input,i) => {
        if(checking == true){
            if(i == 0)
            {
                title = inputElements[i].value;
                inputElements[i].value='';  
                inputElements[i].placeholder='Name a task....';
            }
            if(i == 1)
            {
                timeCur = inputElements[i].value;
                inputElements[i].value = '';
                inputElements[i].placeholder= '00'
            }
            if(i == 2)
            {
                session = inputElements[i].value;
                inputElements[i].value = '';
                inputElements[i].placeholder= '00';
            }
            if (i == 3)
            {
                breakTime = inputElements[i].value;
                inputElements[i].value = '';
                inputElements[i].placeholder= '00';
            }
        } 
    }); 
    if(checking == true){
        generateTask(title,session);
        time.textContent = `${timeCur}:00`
        title = '';
    }
}

export {toggleClass,clearInputs,startBtn,resetBtn,stopBtn,deleteTask,taskCompleted}
