
alert("Bienvenido a Mcdowels")
function Bienvenido(){
    let nombreIngresado = prompt("ingrese su nombre")
    alert("Bienvenido a Mc Dowel: " + nombreIngresado )
}
Bienvenido();

// Definimos el array de hamburguesas con sus precios
let hamburguesas = [
  { nombre: 'Hamburguesa Clásica', precio: 1000 },
  { nombre: 'Hamburguesa con Queso', precio: 1500 },
  { nombre: 'Hamburguesa Doble', precio: 1800 }
];

// Calcula el costo total segun la selección del cliente
function calcularCostoTotal(cantidad, indiceHamburguesa) {
  
  if (indiceHamburguesa >= 0 && indiceHamburguesa < hamburguesas.length) {
    
    let hamburguesa = hamburguesas[indiceHamburguesa];
    
    return cantidad * hamburguesa.precio;
  } else {
    return 'Lo siento, esa opción no es válida.';
  }
}

let hamburguesasPorComer = parseInt(prompt("cuantas hamburguesas quieres comer"))
while (isNaN(hamburguesasPorComer)){
    hamburguesasPorComer=parseInt(prompt("eso no es un numero, vuelva a ingresar"))
}

let opciones = "Selecciona una opción (1,2,3):\n";
for (let i = 0; i < hamburguesas.length; i++) {
  opciones += (i + 1) + ". " + hamburguesas[i].nombre + "\n";
}
let seleccion = parseInt(prompt(opciones)) - 1;
let costoTotal = calcularCostoTotal(hamburguesasPorComer, seleccion);
alert('El costo total es: ' + costoTotal);
// esto habria que retocarlo no me gusta
let hamburguesasQueYAComi  = 0 
while (hamburguesasQueYAComi < hamburguesasPorComer) {
    alert("coma la  hamburguesa ")
    hamburguesasQueYAComi = hamburguesasQueYAComi + 1
    alert("ya comi " + hamburguesasQueYAComi + " hamburguesa")
}

alert(" Gracias vuelva pronto ")
