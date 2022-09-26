//Variables
const tasks = []; //array de tareas, estará vacío la primera vez
let time = 0;
let timer = null;//tendrá una función para ejecutar un pedazo de código cada determinado tiempo
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{//anulamos el funcionamiento nativo de submit
    e.preventDefault();
    //Validamos el forumulario
    if(itTask.value != ''){
        f_createTask(itTask.value);
        itTask.value='';//Una vez creada la tarea, elimino lo que hay en el input
        renderTask();//cada vez que introduzco una tarea, hay que recargar la lista de tareas
    }
})

function f_createTask(value){
    const newTask = {
        id: (Math.random()*100).toString(36).slice(3),
        title: value,
        completed: false
    };
    tasks.unshift(newTask);
}

function renderTask(){
    const html = tasks.map(task => {//con .map podemos iterar sobre cada uno de los elementos del array
        return `
            <div class="task">
                <div class="completed">${task.completed ? `<span class="done">Done</span>`: `<button class="start-button">Start</button>`}</div>
                <div class="title">${task.title}</div>
            </div>
        `;
    });
}