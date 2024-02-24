// Html Elements
import * as HTML from './elements.js'

let title = '';
let hours = 0;
let minutes = 0;

// ELEMENTS OF ACTIVE TASKS
const tasks = []

export function toggleClass(mode) {
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
export function startBtn() {
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

export function stopBtn(){
    console.log('stop');
}

export function resetBtn(){
    console.log('reset');
}

export function taskCompleted(e) {
    /* 
    Loop through the taskList and toggle: HTML.task.classList.add('completed');
     */
}

export function deleteTask(e) {
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


export function generateTask(title){  
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


export function clearInputs(checking) {
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

export function filterInputValue(inputElement,index)
{
    const inputValue = inputElement.value;

    // Regexp text filtering
    if (index !== 0) {
        // Remove non-numeric characters and ensure only one dot and one negative sign
        const cleanedValue = inputValue
        .replace(/[^\d-]/g, '')  // Remove non-numeric characters except '-'
        .replace(/^(-?)0+(?=\d)/, '$1')  // Remove leading zeros and retain a leading negative sign
        .replace(/(?<=^.*)-/g, '');  // Remove lone negative signs not at the beginning

        // Update the input value
        inputElement.value = cleanedValue;
    }
}

//export {toggleClass,clearInputs,startBtn,resetBtn,stopBtn,deleteTask,taskCompleted}
export * from './eventHelperFuncs.js';
