let puntaje = 0;
let puntajeMaximo = 0;
let secuenciaComputadora = [];
let secuenciaUsuario = [];

const $botonEmpezar = document.querySelector('#empezar');
$botonEmpezar.onclick = jugar;

function jugar() {
    secuenciaUsuario = [];
    secuenciaComputadora = [];
    puntaje = 0;
    let usuarioAcerto;
    let continuaRonda = true;

    while (continuaRonda) {
        turnoComputadora(secuenciaComputadora);
        usuarioAcerto = turnoUsuario(secuenciaUsuario, secuenciaComputadora);
        console.log(usuarioAcerto)
        if (usuarioAcerto) {
            puntaje++;
        }
        else {
            continuaRonda = false;
        }
    }

    }