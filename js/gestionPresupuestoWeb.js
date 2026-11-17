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

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    const elemento = document.querySelector(`#${idElemento}`);

    const divAgrupacion = document.createElement("div");
    divAgrupacion.classList.add("agrupacion");

    let periodoMostrar = periodo;

    if (periodo === "dia") {
        periodoMostrar = "día";
    }

    if (periodo === "anyo") {
        periodoMostrar = "año";
    }

    const h1 = document.createElement("h1");
    h1.textContent = `Gastos agrupados por ${periodoMostrar}`;
    divAgrupacion.appendChild(h1);

    Object.entries(agrup).forEach(([clave, valor]) => {
        const divDato = document.createElement("div");
        divDato.classList.add("agrupacion-dato");

        const spanDatoClave = document.createElement("span");
        spanDatoClave.classList.add("agrupacion-dato-clave");
        spanDatoClave.textContent = clave;
        divDato.appendChild(spanDatoClave);

        const spanDatoValor = document.createElement("span");
        spanDatoValor.classList.add("agrupacion-dato-valor");
        spanDatoValor.textContent = valor;
        divDato.appendChild(spanDatoValor);

        divAgrupacion.appendChild(divDato);
    });

    elemento.appendChild(divAgrupacion);
}



export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
};