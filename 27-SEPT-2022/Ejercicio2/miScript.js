//let cafeteraCasa = new Cafetera(1000, 250, 75);
//let cafeteraOficina = new Cafetera(2000, 440, 200);

//let miCafetera = new Cafetera();
let miCafetera = null;
let opcion;

let menu = "= MENÚ CAFETERA = \n"
        +  "=================\n"
        +  "1. Crear cafetera\n"
        +  "2. Servir vaso\n"
        +  "3. Servir taza\n"
        +  "4. Recargar\n"
        +  "5. Mostrar cantidad agua\n"
        +  "6. Salir\n";

do{
    //alert(menu);
    opcion = prompt(menu);
    switch(opcion){
        case "1":
            miCafetera = new Cafetera();
            //miCafetera.capacidadMaximaCafetera = prompt("Intro. la capacidad máxima de la cafetera: ");
            miCafetera.setCapacidadMaximaCafetera(parseInt( prompt("Intro. la capacidad máxima de la cafetera") ));
            miCafetera.setCapacidadCafetera( miCafetera.capacidadMaximaCafetera);
            //miCafetera.capacidadCafetera = miCafetera.capacidadMaximaCafetera;
            //miCafetera.capacidadVaso = prompt("Introduce la capacidad del vaso: ");
            miCafetera.setCapacidadVaso(parseInt( prompt("Introduce la capacidad del vaso: ") ));
            //miCafetera.capacidadTaza = prompt("Introduce la capacidad de la taza: ");
            miCafetera.setCapacidadTaza(parseInt( prompt("Introduce la capacidad de la taza: ") ));
            break;
        case "2":
            try{
                if(miCafetera!=null){
                    miCafetera.servirVaso();
                }
                else{
                    alert("Primero debe crear una cafetera.");
                }
                
            }catch(p_error){
                alert(p_error);
            }            
            break;
        case "3":
            try{
                if(miCafetera!=null){
                    miCafetera.servirTaza();
                }
                else{
                    alert("Primero debe crear una cafetera.");
                }
            }catch(p_error){
                alert(p_error);
            }
            break;
        case "4":
            if(miCafetera!=null){
                miCafetera.recargar();
            }
            else{
                alert("Primero debe crear una cafetera.");
            }
            break;
        case "5":
            alert( miCafetera.getCapacidadCafetera() );
            break;
        case "6":
            break;
        default:
            alert("Opcion incorrecta");
    }
}while(opcion != 6);