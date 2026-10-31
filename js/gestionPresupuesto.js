// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let gastos = [];
let idGasto = 0;
let presupuesto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
    if (typeof nuevoPresupuesto !== "number" || !(nuevoPresupuesto >= 0)) {
        console.error("El presupuesto debe ser un número no negativo.");
        return -1;
    }

    presupuesto = nuevoPresupuesto;
    return presupuesto;
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}
 
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    this.descripcion = descripcion;
    this.etiquetas = etiquetas;

    const fechaConvertida = Date.parse(fecha);
    if (Number.isNaN(fechaConvertida)) {
    this.fecha = Date.now();
    } else {
    this.fecha = fechaConvertida;
   }
    if (typeof valor !== "number" || !(valor >= 0)) {
        this.valor = 0;
    } else {
        
        this.valor = valor;
    }
    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }
    this.actualizarDescripcion = function(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }
    this.actualizarValor = function(nuevoValor) {
    if (typeof nuevoValor === "number" && nuevoValor >= 0) {
        this.valor = nuevoValor;
    }
    };
    this.anyadirEtiquetas = function(...nuevasEtiquetas) {
    for (const etiqueta of nuevasEtiquetas) {
        if (!this.etiquetas.includes(etiqueta)) {
            this.etiquetas.push(etiqueta);
            }
        }
    };
        this.borrarEtiquetas = function(...etiquetasParaBorrar) {
        for (const etiqueta of etiquetasParaBorrar) {
        const index = this.etiquetas.indexOf(etiqueta);
            if (index !== -1) {
                this.etiquetas.splice(index, 1);
            }
        }
    };
        this.actualizarFecha = function(nuevaFecha) {
        const fechaNueva = Date.parse(nuevaFecha);

        if (!Number.isNaN(fechaNueva)) {
            this.fecha = fechaNueva;
        }
    };
        this.mostrarGastoCompleto = function() {
        const fechaFormateada = new Date(this.fecha).toLocaleString();
        const etiquetasFormateadas = this.etiquetas.length > 0
            ? `- ${this.etiquetas.join("\n- ")}`
            : "";

        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.
Fecha: ${fechaFormateada}
Etiquetas:
${etiquetasFormateadas}
`;
    };
}

function listarGastos() {
    return gastos;
}
function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}
function borrarGasto() {}
function calcularTotalGastos() {}
function calcularBalance() {}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
