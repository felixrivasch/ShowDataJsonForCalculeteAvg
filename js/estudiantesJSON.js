//JSON estudiantes.
var estudiantes=[
	{	"codigo":"E00001",
		"nombre":"Juan Ramos",
		"nota"	 :20
	},
	{	"codigo":"E00002",
		"nombre":"Macelo Lopez",
		"nota"	 :19
	},
	{ 	"codigo":"E00003",
		"nombre":"Eduardo Muños",
		"nota"	 :13
	},
	{ 	"codigo":"E00004",
		"nombre":"Angel Vitarte",
		"nota"	 :17
	},
	{ 	"codigo":"E00005",
		"nombre":"Manuel Alvez",
		"nota"	 :15
	},
	{ 	"codigo":"E00006",
		"nombre":"Cynthia Rojas",
		"nota"	 :14
	},
	{ 	"codigo":"E00007",
		"nombre":"Valeria Rivas",
		"nota"	 :17
	},
	{ 	"codigo":"E00008",
		"nombre":"Fernando Fer",
		"nota"	 :16
	},
	{ 	"codigo":"E00009",
		"nombre":"Gerardo Zavaleta",
		"nota"	 :11
	},
	{ 	"codigo":"E00010",
		"nombre":"Carmen Cigueñas",
		"nota"	 :12
	}
];
//Función que permite mostrar todos los objetos del JSON estudiantes.
function mostrarEstudiantes () {
	for (var i = 0; i < estudiantes.length; i++) {
		var codigoi = "codigo"+i;
		var nombrei = "nombre"+i;
		var notai = "nota"+i;
		document.getElementById(codigoi).innerHTML=estudiantes[i].codigo;
		document.getElementById(nombrei).innerHTML=estudiantes[i].nombre;
		document.getElementById(notai).innerHTML=estudiantes[i].nota;
		
	}
}
//Función que permite calcular la nota promedio de los estudiantes.
function calularPromedio () {
	var suma = 0;
	for (var i = 0; i < estudiantes.length; i++) {
		var suma = suma+estudiantes[i].nota;
		var prom = suma/estudiantes.length;
	}
	document.getElementById("promedio").innerHTML=prom;
}
//Función que permite calcular y mostrar al estudiante con mayor nota.
function mostrarMayorNota () {
	var mayorNota = 0;
	var codigoMayorNota ="";
	var nombreMayorNota ="";
	for (var i = 0; i < estudiantes.length; i++) {

		if (estudiantes[i].nota > mayorNota) {
			mayorNota = estudiantes[i].nota;
			codigoMayorNota = estudiantes[i].codigo;
			nombreMayorNota = estudiantes[i].nombre;
		}
	}
	document.getElementById("codigoMayorNota").innerHTML = codigoMayorNota;
	document.getElementById("nombreMayorNota").innerHTML = nombreMayorNota;
	document.getElementById("mayorNota").innerHTML = mayorNota;
}
//Función que permite calcular y mostrar al estudiante con menor nota.
function mostrarMenorNota () {
	var menorNota = 1000;
	var codigoMenorNota ="";
	var nombreMenorNota ="";
	for (var i = 0; i < estudiantes.length; i++) {

		if (estudiantes[i].nota < menorNota) {
			menorNota = estudiantes[i].nota;
			codigoMenorNota = estudiantes[i].codigo;
			nombreMenorNota = estudiantes[i].nombre;
		}
	}
	document.getElementById("codigoMenorNota").innerHTML = codigoMenorNota;
	document.getElementById("nombreMenorNota").innerHTML = nombreMenorNota;
	document.getElementById("menorNota").innerHTML = menorNota;
}
//Función que permite limpiar los los cálculos con un reload.
function limpiar () {
	
	if (confirm("¡Se van a limpiar todos los datos calculados!")==true) {
		location.reload(true);
	}else {
		alert("¡Ok, no se borrarán los datos!")
	}
	
}
//Función que permite cambiar de color al pasar el mouse sobre una fila o campo de la tabla.
function cambiarColor (elemento) {
	elemento.style.background = '#2E9AFE';
	elemento.style.fontWeight = 'bold';
}
//Función que permite restaurar e color al salir el mouse de una fila o campo de la tabla.
function regresarColor (elemento) {
	elemento.style.background = '#FFFFFF';
	elemento.style.fontWeight = 'normal';
}
//Función que permite mostrar comentarios de  los botones de acción.
function mostrarComentario (elemento) {
	switch (elemento) {
		case 'mostrarEstudiantes':
			document.getElementById("comentario1").innerHTML="Muestra la lista de todos los estudiantes.";
			break;
		case 'calcularPromedio':
			document.getElementById("comentario2").innerHTML="Calcula y muestra el promedio de todas las notas.";
			break;
		case 'mostarMayorNota':
			document.getElementById("comentario3").innerHTML="Muestra el alumno con la mayor nota.";
			break;
		case 'mostarMenorNota':
			document.getElementById("comentario4").innerHTML="Muestra el alumno con la menor nota.";
			break;
		case 'limpiar':
			document.getElementById("comentario5").innerHTML="Limpia todos los cálculos mostrados.";
			break;
		default:
			break;
	}
}
//Función que oculta los comentarios de los botones de acción.
function ocultarComentario (elemento) {
	document.getElementById(elemento).innerHTML="";
}