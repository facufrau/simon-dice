let $puntaje = document.querySelector('#puntaje');
let $puntajeMaximo = document.querySelector('#puntaje-max');
let secuenciaComputadora = [];
let secuenciaUsuario = [];

const $botonEmpezar = document.querySelector('#empezar');
const $botonReiniciar = document.querySelector('#reiniciar');
$botonEmpezar.onclick = jugar;
$botonReiniciar.onclick = reiniciarEstado;

function jugar() {
    reiniciarEstado();
    jugarRonda();
}

function jugarRonda() {
    secuenciaUsuario = [];
    desactivarInputUsuario();
    turnoComputadora(secuenciaComputadora, activarInputUsuario);
}

function seleccionarBotonAleatorio(listaBotones) {
    const indice = Math.floor(Math.random() * (4 - 0));
    return listaBotones[indice];
}

function resaltarElemento(elemento) {
    elemento.style.opacity = 1.0;
    setTimeout(function(){elemento.style.opacity = 0.5}, 500);
}

function resaltarElementoClickeado(elemento) {
    elemento.style.opacity = 1.0;
    setTimeout(function(){elemento.style.opacity = 0.5}, 500);
}

function compararJugadas(secuenciaComputadora, secuenciaUsuario) {
    for(let i = 0; i < secuenciaUsuario.length; i++) {
        if (secuenciaComputadora[i] !== secuenciaUsuario[i]) {
            return false;
        }
    }
    return true;
}

function turnoComputadora(secuenciaComputadora, funcionFinRondaCallback) {
    const $circulos = document.querySelectorAll('.circulo');
    let elementoBoton = seleccionarBotonAleatorio($circulos);
    secuenciaComputadora.push(Number(elementoBoton.innerText) - 1);
        
    secuenciaComputadora.forEach((indiceElemento, contador) => {
        let elementoAResaltar = $circulos[indiceElemento];
        setTimeout(function(){resaltarElemento(elementoAResaltar)}, contador * 1000);
    });
    let tiempoEnFinalizarTurnoComputadora = (secuenciaComputadora.length) * 1000;
    setTimeout(funcionFinRondaCallback, tiempoEnFinalizarTurnoComputadora);
}

function turnoUsuario(e) {
    let $circulo = e.target;
    let usuarioAcerto;
    
    resaltarElementoClickeado($circulo);
    secuenciaUsuario.push(Number($circulo.innerText -  1));
    
    usuarioAcerto = compararJugadas(secuenciaComputadora, secuenciaUsuario);
    if (usuarioAcerto === false) {
        terminarJuego();
    }
    else if (usuarioAcerto && (secuenciaComputadora.length === secuenciaUsuario.length)) {
        $puntaje.innerText++;
        setTimeout(jugarRonda, 1000);
    }

}

function activarInputUsuario(){
    const $circulos = document.querySelectorAll('.circulo');
    $circulos.forEach(circulo => {circulo.onclick = turnoUsuario})
}

function desactivarInputUsuario() {
    const $circulos = document.querySelectorAll('.circulo');
    $circulos.forEach(circulo => {circulo.onclick = function(){console.log('Input bloqueado!')}})
}

function reiniciarEstado() {
    desactivarInputUsuario();
    $puntaje.innerText = 0;
    secuenciaComputadora = [];
    secuenciaUsuario = [];
}

function terminarJuego() {
    if ($puntaje.innerText > $puntajeMaximo.innerText) {
        $puntajeMaximo.innerText = $puntaje.innerText;
    }
    reiniciarEstado();
    alert('Perdiste, fin del juego. Presioná empezar para jugar de nuevo.');
}