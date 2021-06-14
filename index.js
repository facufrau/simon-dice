let puntaje = 0;
let puntajeMaximo = 0;
let secuenciaComputadora = [];
let secuenciaUsuario = [];
let activo = false;

const $botonEmpezar = document.querySelector('#empezar');
$botonEmpezar.onclick = comenzarJuego;

function jugarRonda(continuaRonda) {
    if (continuaRonda) {
        turnoComputadora(secuenciaComputadora);
        turnoUsuario(secuenciaUsuario, secuenciaComputadora);
    }
    else {
        console.log('Juego finalizado');
    }

    
}

function comenzarJuego() {
    let continuaRonda = true;
    for (let i = 1; i <= 6; i++){
        if (i === 6) {
            continuaRonda = false;
        }
        jugarRonda(continuaRonda);
    }
    
}
