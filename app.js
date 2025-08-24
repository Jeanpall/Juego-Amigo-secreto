let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Felicidades!, has adivinado el numero secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");

    // Condicion en caso de no acertar el numero secreto.
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es Menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es Mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

// Funcion para limpiar la caja de texto "Input"
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

// Funcion para asignar los textos
function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // Condicional para evitar que se repitan los numeros generados
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros");
  } else {
    // Si el numero generado ya esta en la lista, generar otro numero
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

// Funcion con las condiciones iniciales del juegp
function condicionesIniciales() {
  // Asignacion de textos
  asignarTextoElemento("h1", "Juego del numero Secreto");
  asignarTextoElemento("p", "Dame tu numero del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

// Funcion para reiniciar el juego
function reiniciarJuego() {
  // Limpiar la Caja "Input"
  limpiarCaja();
  // Iniciar las condiciones iniciales "Mensaje / Numero Secreto / Intentos"
  condicionesIniciales();
  // Deshabilitar el boton "Nuevo Juego"
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
