let cafeteraCasa = new Cafetera(1000, 250, 75);
let cafeteraOficina = new Cafetera(2000, 440, 200);

let miCafetera = new Cafetera();
let opcion;

let menu = "= MENÚ CAFETERA = \n"
        +  "=================\n"
        +  "1. Crear cafetera\n"
        +  "2. Servir vaso\n"
        +  "3. Servir taza\n"
        +  "4. Recargar\n"
        +  "5. Salir\n";

do{
    //alert(menu);
    opcion = prompt(menu);
    switch(opcion){
        case "1":
            miCafetera.capacidadMaximaCafetera = prompt("Intro. la capacidad máxima de la cafetera: ");
            miCafetera.capacidadCafetera = miCafetera.capacidadMaximaCafetera;
            miCafetera.capacidadVaso = prompt("Introduce la capacidad del vaso: ");
            miCafetera.capacidadTaza = prompt("INtroduce la capacidad de la taza: ");
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        default:
            alert("Opcion incorrecta")
;    }
}while(opcion != 5);