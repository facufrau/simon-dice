function jugar() {
    $circulos = document.querySelectorAll('.circulo');
    let elementoBoton = seleccionarBotonAleatorio($circulos);
    resaltarBoton(elementoBoton);
}

function seleccionarBotonAleatorio(listaBotones) {
    const indice = Math.floor(Math.random() * (4 - 0)) + 0;
    return listaBotones[indice];
}

function resaltarBoton(elemento) {

}