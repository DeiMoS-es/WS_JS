class Cafetera {

    constructor(p_capacidadCafetera, p_capacidadVaso, p_capacidadTaza)
    {
        this.capacidadMaximaCafetera = p_capacidadCafetera;
        this.capacidadCafetera = p_capacidadCafetera;
        this.capacidadVaso = p_capacidadVaso;
        this.capacidadTaza = p_capacidadTaza;
    }

    servirVaso(){
        if(this.capacidadVaso > this.capacidadCafetera){
            alert("La cafetera se ha quedado sin agua. POr favor, recárguela.<br>" + 
                  "No se ha servido el café.");
        }
        else{
        //this.capacidadCafetera = this.capacidadCafetera - this.capacidadVaso;
        this.capacidadCafetera -= this.capacidadVaso;
        alert("Ha servido un vaso de café");
        }
    }

    servirTaza(){
        if(this.capacidadTaza > this.capacidadCafetera){
            alert("La cafetera se ha quedado sin agua. POr favor, recárguela.<br>" + 
                  "No se ha servido el café.");
        }
        else{
            this.capacidadCafetera -= this.capacidadTaza;
            alert("Ha servido una taza de café");
        }
    }

    recargar(){
        this.capacidadCafetera = this.capacidadMaximaCafetera;
    }
}