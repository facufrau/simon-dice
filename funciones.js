function seleccionarBotonAleatorio(listaBotones) {
    const indice = Math.floor(Math.random() * (4 - 0));
    return listaBotones[indice];
}

function resaltarElemento(elemento) {
    elemento.style.opacity = 1.0;
    setTimeout(function(){elemento.style.opacity = 0.5}, 800);
}

function resaltarElementoClickeado(elemento) {
    elemento.style.opacity = 1.0;
    setTimeout(function(){elemento.style.opacity = 0.5}, 200);
}

function compararJugadas(secuenciaComputadora, secuenciaUsuario) {
    for(let i = 0; i < secuenciaComputadora.length; i++) {
        if (secuenciaComputadora[i] !== secuenciaUsuario[i]) {
            return false;
        }
    }
    return true;
}

function turnoComputadora(secuenciaComputadora) {
    const $circulos = document.querySelectorAll('.circulo');
    let elementoBoton = seleccionarBotonAleatorio($circulos);
    secuenciaComputadora.push(Number(elementoBoton.innerText) - 1);
        
    secuenciaComputadora.forEach((indiceElemento, contador) => {
        let elementoAResaltar = $circulos[indiceElemento];
        setTimeout(function(){resaltarElemento(elementoAResaltar)}, contador * 1000);
    });
}

function turnoUsuario(e) {
    let $circulo = e.target;
    console.log($circulo.innerText);

    resaltarElementoClickeado($circulo);
    secuenciaUsuario.push(Number(circulo.innerText -  1));
    
    return compararJugadas(secuenciaComputadora, secuenciaUsuario);
}

function activarInputUsuario(){
    const $circulos = document.querySelectorAll('.circulo');
    $circulos.forEach(circulo => {circulo.onclick = turnoUsuario})
}

function desactivarInputUsuario() {
    const $circulos = document.querySelectorAll('.circulo');
    $circulos.forEach(circulo => {circulo.onclick = function(){console.log('Input bloqueado!')}})
}
