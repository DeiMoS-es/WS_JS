//Variables
const tasks = []; //array de tareas, estará vacío la primera vez
let time = 0;
let timer = null;//tendrá una función para ejecutar un pedazo de código cada determinado tiempo
let timerBreak = null;
let current = null;

const btnAdd = document.querySelector('#bAdd');
const inputTask = document.querySelector('#itTask');
const form = document.querySelector('#form');
const taskName = document.querySelector('#time #taskName');

renderTime();
renderTask();

form.addEventListener('submit', e =>{//anulamos el funcionamiento nativo de submit
    e.preventDefault();
    //Validamos el forumulario
    if(inputTask.value != ''){
        f_createTask(inputTask.value);
        inputTask.value='';//Una vez creada la tarea, elimino lo que hay en el input
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
    const html = tasks.map((task) => {//con .map podemos iterar sobre cada uno de los elementos del array
        return `
            <div class="task">
                <div class="completed">${task.completed 
                    ? `<span class="done">Done</span>`
                    : `<button class="start-button" data-id="${task.id}">Start</button>`
                    }</div>
                <div class="title">${task.title}</div>
            </div>
        `;
    });

    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join(''); //map me devuelve un arreglo de strings con cada etiqueta <div></div>, con join unimos cada elemento con un espacio vacío, por eso ""

    const startButtons = document.querySelectorAll('.task .start-button');
    startButtons.forEach(button => {
        button.addEventListener('click', e =>{
            //quiero saber si hay algún timer activado
            if(!timer){
                const id = button.getAttribute('data-id');
                startButtonHandler(id);
                button.textContent = 'In progres...';
            }
        });
    });
}

function startButtonHandler(id){
    time = 25 * 60 ;//25 minuts, cada minuto tiene 60 segundos
    current = id;//almacena el id de la activiadd actual
    //Busco la tarea actual
    const taskIndex = tasks.findIndex(task => task.id === id);//Cuando encuentre la tarea con id igual al que recibe la función, la almaceno en la variable
    
    taskName.textContent = tasks[taskIndex].title; //ya tengo el elemento
    renderTime();//para mostrar el primer segundo de la cuenta atrás
    timer = setInterval(()=>{//setInterval permite ejecutar una función de forma indefinida, hasta que yo la detenga
        timerHandler(id);
    },1000);//setInterval maneja milisegundos, y mil es 1 segundo
}

function timerHandler(id){
    time--;
    renderTime();
    if(time === 0){
        clearInterval(timer);
        markCompleted(id);
        timer = null;
        renderTask();
        startBreak();
    }
}

function renderTime(){
    const timeDiv = document.querySelector('#time #value');//Capa donde se va a colocar el texto
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? '0':''}${minutes}
                         : ${seconds < 10 ? '0':''}${seconds}`;
}

function markCompleted(id){
    //busco la actividad y se cambia completed a true
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = true;

}

function startBreak(){
    time = 5 * 60;
    taskName.textContent = 'Break';
    renderTime();
    timerBreak = setInterval(() =>{
        timerBreakHandler();
    }, 1000);
}

function timerBreakHandler(){
    time--;
    renderTime();
    if(time === 0){
        clearInterval(timerBreak);
        current = null;
        timerBreak = null;
        taskName.textContent = '';
        renderTask();
        
    }
}