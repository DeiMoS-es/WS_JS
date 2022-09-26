class Alumno{
    constructor(p_matricula, p_nombre, p_apellido, p_telefono){
        this.matricula = p_matricula || 0;
        this.nombre = p_nombre || "Sin nombre";
        this.apellido = p_apellido || "Sin apellido";
        this.telefono = p_telefono || 0;
        this.email = undefined || null;
        this.nota = undefined || 0;
    }

    detalle(){
        var mensaje;
        mensaje = "Número matrícula: " + this.matricula + "<br>"
                + "Nombre: " + this.nombre + "<br>" 
                + "Apellido: " + this.apellido + "<br>"
                + "Teléfono: " + this.telefono + "<br>"
                + "Email: " + this.email+ "<br>"
                + "<hr>";

        return mensaje;
    }

    calificar(p_nota){
        this.nota = p_nota;
    }
}