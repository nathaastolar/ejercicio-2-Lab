
var datoslab = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" }, 
 { nombre : "Papu", apellido : "Rivarola", rol : "Psicóloga", cumpleanios : "10 de octubre" }, 
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];
var imprime = document.getElementById('datos');
var vacia = "";
	for (var i in datoslab) { 
		var x = "<div><ul><li> Nombre : " + datoslab[i].nombre + "</li>" + 
		"<li>Apellido : "+ datoslab[i].apellido + "</li>" 
		+ "<li>Rol : " + datoslab[i].rol + "</li>" +
		 "<li>Cumpleaños : " + datoslab[i].cumpleanios + "</li></ul></div>"; 

	 
		vacia += x;
	
	
}
imprime.innerHTML = "<br>" + vacia + "<br>";

