function mostrarDatoEnId(idElemento,valor) {

    const elemento = document.querySelector(`#${idElemento}`);

    elemento.textContent = valor;

}

function mostrarGastoWeb(idElemento, gasto) {
    const elemento = document.querySelector(`#${idElemento}`);

    const divPrincipal = document.createElement("div");
    divPrincipal.classList.add("gasto");

    const divDescripcion = document.createElement("div");
    divDescripcion.classList.add("gasto-descripcion");
    divDescripcion.textContent = gasto.descripcion;
    divPrincipal.appendChild(divDescripcion);

    const divFecha = document.createElement("div");
    divFecha.classList.add("gasto-fecha");
    divFecha.textContent = new Date(gasto.fecha).toLocaleDateString();
    divPrincipal.appendChild(divFecha);

    const divValor = document.createElement("div");
    divValor.classList.add("gasto-valor");
    divValor.textContent = gasto.valor;
    divPrincipal.appendChild(divValor);

    const divEtiquetas = document.createElement("div");
    divEtiquetas.classList.add("gasto-etiquetas");

    gasto.etiquetas.forEach(etiqueta => {
        const spanEtiqueta = document.createElement("span");
        spanEtiqueta.classList.add("gasto-etiquetas-etiqueta");
        spanEtiqueta.textContent = etiqueta;
        divEtiquetas.appendChild(spanEtiqueta);
    });

    divPrincipal.appendChild(divEtiquetas);
    elemento.appendChild(divPrincipal);
}

function mostrarGastosAgrupadosWeb() {

}




export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
};