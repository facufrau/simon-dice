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

function compararJugadas(secuencia1, secuencia2) {
    if (JSON.stringify(secuencia1) === JSON.stringify(secuencia2)) {
        return true;
    }
    else {
        return false;
    }
}

function turnoComputadora(secuenciaComputadora) {
    $circulos = document.querySelectorAll('.circulo');
    let elementoBoton = seleccionarBotonAleatorio($circulos);
    secuenciaComputadora.push(Number(elementoBoton.innerText) - 1);
        
    secuenciaComputadora.forEach((indiceElemento, contador) => {
        let elementoAResaltar = $circulos[indiceElemento];
        setTimeout(function(){resaltarElemento(elementoAResaltar)}, contador * 1000);
    });
}

function turnoUsuario(secuenciaUsuario, secuenciaComputadora) {
    $circulos = document.querySelectorAll('.circulo');
    $circulos.forEach(circulo =>
        {
            circulo.onclick = () => 
            {
            secuenciaUsuario.push(Number(circulo.innerText -  1));
            resaltarElementoClickeado(circulo);
            if (secuenciaUsuario.length === secuenciaComputadora.length) {
                if (compararJugadas(secuenciaUsuario, secuenciaComputadora)) {
                    return true;
                } else {
                    return false;
                }
            } 
            }
        }
    )
}
