//variables del html
const inputCard = document.getElementById("inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.getElementById("inputCVV");

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current = "";

let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener('keydown', (e) =>{
    if(e.key === 'Tab'){
        return;
    }
    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join("");
});

inputDate.addEventListener('keydown', (e) =>{
    if(e.key === 'Tab'){
        return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
});

inputCVV.addEventListener('keydown', (e) =>{
    if(e.key === 'Tab'){
        return;
    }
    e.preventDefault();
    handleInput(maskCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
});

function handleInput(mask, key, arr){//ejemplo mask = maskNumber, el valor dependerá del mask en el que estemos situado
                                     //key = e.key, es decir a la tecla pulsada
    let numbersPermitidos = ["0","1","2","3","4","5","6","7","8","9",];
    if(key === 'Backspace' && arr.length > 0){//si la tecla = retroseso y el arr que viene como parametro tiene más de un elemento
                                              //sacamos ese elemento, simulo eliminar un caracter
        arr.pop();
        return;
    }
    if(numbersPermitidos.includes(key) && arr.length + 1 <= mask.length){//validamos si la tecla pulsada existe dentro del array de numeros validos
                                                                         //la segunda parte validamos que si el array + 1 posición es menor que el array donde está el patrón es menor, permitimos añadir más números
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);//si me encuentro en un separador agrego el separador y la tecla
        }
        else{//si no encuentra un separador, simplemente agrega la tecla pulsada
            arr.push(key);
        }
    }
}