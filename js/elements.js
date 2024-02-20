// CLASSES
const taskSetting = document.querySelector('.task-settings')
const overlay = document.querySelector('.overlay')
const img = document.querySelectorAll('.img')
const inputElements = document.querySelectorAll('input[type="text"]')
const taskContainer = document.querySelector('.task-container')
const delIcon = document.querySelectorAll('.delIcon')
const task = document.querySelector('.task')

// ID-s
const btn_start = document.getElementById('btn-start')
const btn_stop = document.getElementById('btn-stop')
const btn_reset = document.getElementById('btn-reset')
const time = document.getElementById('time')
const checkDone = document.getElementById('img-2')
const addTask = document.getElementById('img-1')
const taskDone = document.getElementById('circle-img')
const taskNameInput = document.getElementById('task-name')


export {taskSetting,overlay,addTask,taskDone,img,inputElements,taskContainer,delIcon,task,btn_start,btn_stop,btn_reset,time,checkDone,taskNameInput}