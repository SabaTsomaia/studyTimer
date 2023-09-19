// Html Elements
import {overlay,addTask,taskDone,img,inputElements,taskContainer,btn_start,btn_reset,btn_stop, checkDone} from "./elements.js"
// Functions 
import {toggleClass,clearInputs,startBtn,resetBtn,stopBtn,deleteTask,taskCompleted} from  "./eventHelperFuncs.js"

let value1 = 0,value2 = 0,value3 = 0;
let checking=true; 


btn_start.addEventListener('click',() => {
    startBtn();
})

btn_reset.addEventListener('click',() => {
    resetBtn();
})

btn_stop.addEventListener('click',() => {
    stopBtn();
})

taskContainer.addEventListener('click',(e) => {
    deleteTask(e);
});

checkDone.addEventListener('click',(e) => {
    taskCompleted(e);
})

img.forEach((element) => {
    element.addEventListener('click',() => {
        switch(true) {
            // First line of inputs
            case element.classList.contains('up-arrow1'):
                inputElements[1].value = ++value1;
                break;
            
            case element.classList.contains('down-arrow1'):
                if(!value1 == 0)
                    inputElements[1].value = --value1;
                    if(inputElements[1].value == 0){ 
                        inputElements[1].value = '';
                        inputElements[1].placeholder='00';
                    }
                break;

            // second line of inputs
            case element.classList.contains('up-arrow2'):
                inputElements[2].value = ++value2;
                break;
            case element.classList.contains('down-arrow2'):
                if(!value2 == 0)    
                    inputElements[2].value = --value2;
                    if(inputElements[2].value == 0){ 
                        inputElements[2].value = '';
                        inputElements[2].placeholder='00';
                    }
                break;

            // third Line of inputs
            case element.classList.contains('up-arrow3'):
                inputElements[3].value = ++value3;
                break;
            case element.classList.contains('down-arrow3'):
                if(!value3 == 0)    
                    inputElements[3].value = --value3;
                    if(inputElements[3].value == 0){ 
                        inputElements[3].value = '';
                        inputElements[3].placeholder='00';
                    }
                break;    
   
    }
 });    
});

addTask.addEventListener('click',() => {
    toggleClass(false);
});

taskDone.addEventListener('click',(e) => {
    // if every field is filled 
    inputElements.forEach((input,i) => {
            if (inputElements[i].value.trim() === '')
                checking = false;
    });
   
    if(checking){
        toggleClass(true);
        clearInputs(checking);
    } 
    checking = true;
});

overlay.addEventListener('click',() => {
    toggleClass(true);
    clearInputs(false);
});
