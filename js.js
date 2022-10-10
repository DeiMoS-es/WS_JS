
//Función JS para mostar/ocultar varios div
function mostrarOcultarMensual(){
	var dom_divMensual = document.getElementsByClassName("infoMensual");//Obtengo el div de datos mensuales
	//Al seleccionar por ClassName, devuelve una matriz con todos los elementos de la clase que estamos buscando
	//Para este caso, solo queremos mostrar/ocultar el primer elementos que devuelve, ya que como este a su vez tiene una condición para mostrar Productos/Suministros
	//llegará en primer lugar el que queremos mostrar/ocultar
	if(dom_divMensual[0].style.display === 'none'){
		dom_divMensual[0].style.display = '';
	}
	else{
		dom_divMensual[0].style.display = 'none';
	}
}