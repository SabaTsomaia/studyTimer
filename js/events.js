// HTML Elements
import * as HTML from "./elements.js"
// Functions 
import * as HELP from './eventHelperFuncs.js'

let value1 = 0,value2 = 0;
let checking=true; 


HTML.btn_start.addEventListener('click',() => {
    HELP.startBtn();
})

HTML.btn_reset.addEventListener('click',() => {
    HELP.resetBtn();
})

HTML.btn_stop.addEventListener('click',() => {
    HELP.stopBtn();
})

HTML.taskContainer.addEventListener('click',(e) => {
    HELP.deleteTask(e);
});

HTML.checkDone.addEventListener('click',(e) => {
    HELP.taskCompleted(e);
})

HTML.img.forEach((element) => {
    element.addEventListener('click',() => {
        switch (true) {
            // First line of inputs
            case element.classList.contains('up-arrow1'):
                value1 = HTML.inputElements[1].value;
                HTML.inputElements[1].value = ++value1;
                break;
        
            case element.classList.contains('down-arrow1'):
                value1 = HTML.inputElements[1].value;
                HTML.inputElements[1].value = --value1;
                if (HTML.inputElements[1].value == 0) { 
                    HTML.inputElements[1].value = '';
                    HTML.inputElements[1].placeholder = '00';
                }
                break;
        
            // second line of inputs
            case element.classList.contains('up-arrow2'):
                value2 = HTML.inputElements[2].value;
                HTML.inputElements[2].value = ++value2;
                break;
        
            case element.classList.contains('down-arrow2'):
                value2 = HTML.inputElements[2].value;
                HTML.inputElements[2].value = --value2;
                if (HTML.inputElements[2].value == 0) { 
                    HTML.inputElements[2].value = '';
                    HTML.inputElements[2].placeholder = '00';
                }
                break;
        }
 });    
});

HTML.inputElements.forEach((e,i) => {
    e.addEventListener('input',() => {
        if (i != 0)
            e.value = e.value.replace(/[^0-9.-]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
    })
})

HTML.addTask.addEventListener('click',() => {
    HELP.toggleClass(false);
});

HTML.taskDone.addEventListener('click',(e) => {
    // if every field is filled 
    
    HTML.inputElements.forEach((_,i) => {
            if (HTML.inputElements[i].value.trim() === '')
            {
                HTML.inputElements[i].classList.add('placeholder-red')
                checking = false;
            }
    });
    
    // IF checking is done
    if(checking){
        HELP.toggleClass(true);
        HELP.clearInputs(checking);

        // Remove RED placeholder after task is added
        HTML.inputElements.forEach((_,i) => {
            if (HTML.inputElements[i].classList.contains('placeholder-red'))
                HTML.inputElements[i].classList.remove('placeholder-red')
        });    
        value1 = 0
        value2 = 0
    } 

    checking = true;
});

HTML.overlay.addEventListener('click',() => {
    HELP.toggleClass(true);
    HELP.clearInputs(false);
});
