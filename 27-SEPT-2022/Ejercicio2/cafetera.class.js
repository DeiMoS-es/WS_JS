class Cafetera {

    constructor(p_capacidadCafetera, p_capacidadVaso, p_capacidadTaza)
    {
        this.capacidadMaximaCafetera = p_capacidadCafetera;
        this.capacidadCafetera = p_capacidadCafetera;
        this.capacidadVaso = p_capacidadVaso;
        this.capacidadTaza = p_capacidadTaza;
    }

    servirVaso(){
        var mensaje;
        if(this.capacidadVaso > this.capacidadCafetera){
            mensaje = "La cafetera se ha quedado sin agua. Por favor, recárguela.\n" + 
            "No se ha servido el café.";
            throw mensaje;
        }
        else{
            this.capacidadCafetera -= this.capacidadVaso;
            alert("Ha servido un vaso de café");
        }
        /*if(this.capacidadVaso > this.capacidadCafetera){
            alert("La cafetera se ha quedado sin agua. Por favor, recárguela.\n" + 
                  "No se ha servido el café.");
        }
        else{
        //this.capacidadCafetera = this.capacidadCafetera - this.capacidadVaso;
        this.capacidadCafetera -= this.capacidadVaso;
        alert("Ha servido un vaso de café");
        }*/
    }

    servirTaza(){
        var mensaje;
        if(this.capacidadTaza > this.capacidadCafetera){
            mensaje = "La cafetera se ha quedado sin agua. Por favor, recárguela.\n" + 
            "No se ha servido el café.";
            throw mensaje;
        }
        else{
            this.capacidadCafetera -= this.capacidadTaza;
            alert("Ha servido un vaso de café");
        }
        /*if(this.capacidadTaza > this.capacidadCafetera){
            alert("La cafetera se ha quedado sin agua. Por favor, recárguela.\n" + 
                  "No se ha servido el café.");
        }
        else{
            this.capacidadCafetera -= this.capacidadTaza;
            alert("Ha servido una taza de café");
        }*/
    }

    recargar(){
        this.capacidadCafetera = this.capacidadMaximaCafetera;
        alert("Cafetera recargada.")
    }

    //seters
    setCapacidadMaximaCafetera(p_capacidadMaximaCafetera){
        if(isNaN(p_capacidadMaximaCafetera)){
            alert("Formato incorrecto, debe indicar un número");
        }
        else{
            this.capacidadMaximaCafetera = p_capacidadMaximaCafetera
        }
    }

    setCapacidadCafetera(p_capacidadCafetera){
        if(isNaN(p_capacidadCafetera)){
            alert("Formato incorrecto, debe indicar un número");
        }
        else{
            this.capacidadCafetera = p_capacidadCafetera
        }
    }

    setCapacidadVaso(p_capacidadVaso){
        if(isNaN(p_capacidadVaso)){
            alert("Formato incorrecto, debe indicar un número");
        }
        else{
            this.capacidadVaso= p_capacidadVaso
        }
    }

    setCapacidadTaza(p_capacidadTaza){
        if(isNaN(p_capacidadTaza)){
            alert("Formato incorrecto, debe indicar un número");
        }
        else{
            this.capacidadTaza = p_capacidadTaza
        }
    }

    //getters
    getCapacidadCafetera(){
        var mensaje;
        if(this.capacidadCafetera == 0){
            mensaje = "Cafetera vacía";
        }
        else{
            mensaje = "La cafetera contiene: " + this.capacidadCafetera
        }
        return mensaje;
    }
}