// HTML Elements
import * as HTML from "./elements.js"
// Functions 
import * as Help from './eventHelperFuncs.js'

let value1 = 0,value2 = 0,value3 = 0;
let checking=true; 


HTML.btn_start.addEventListener('click',() => {
    Help.startBtn();
})

HTML.btn_reset.addEventListener('click',() => {
    Help.resetBtn();
})

HTML.btn_stop.addEventListener('click',() => {
    Help.stopBtn();
})

HTML.taskContainer.addEventListener('click',(e) => {
    Help.deleteTask(e);
});

HTML.checkDone.addEventListener('click',(e) => {
    Help.taskCompleted(e);
})

HTML.img.forEach((element) => {
    element.addEventListener('click',() => {
        switch(true) {
            // First line of inputs
            case element.classList.contains('up-arrow1'):
                HTML.inputElements[1].value = ++value1;
                break;
            
            case element.classList.contains('down-arrow1'):
                if(!value1 == 0)
                    HTML.inputElements[1].value = --value1;
                    if(HTML.inputElements[1].value == 0){ 
                        HTML.inputElements[1].value = '';
                        HTML.inputElements[1].placeholder='00';
                    }
                break;

            // second line of inputs
            case element.classList.contains('up-arrow2'):
               if(value2 > 9)
                    value2 = 9;
               HTML.inputElements[2].value = ++value2;
                break;

            case element.classList.contains('down-arrow2'):
                if(!value2 == 0)    
                    HTML.inputElements[2].value = --value2;
                    if(inputElements[2].value == 0){ 
                        HTML.inputElements[2].value = '';
                        HTML.inputElements[2].placeholder='00';
                    }
                break;
    }
 });    
});

HTML.inputElements.forEach((el,i) => {
    el.addEventListener('input',() => {
        el.value = el.value.replace(/[^0-9.-]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
    })
})

HTML.addTask.addEventListener('click',() => {
    Help.toggleClass(false);
});

HTML.taskDone.addEventListener('click',(e) => {
    // if every field is filled 
    HTML.inputElements.forEach((input,i) => {
            if (HTML.inputElements[i].value.trim() === '')
                checking = false;
    });
   
    if(checking){
        Help.toggleClass(true);
        Help.clearInputs(checking);
    } 
    checking = true;
});

HTML.overlay.addEventListener('click',() => {
    Help.toggleClass(true);
    Help.clearInputs(false);
});
