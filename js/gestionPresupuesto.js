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

function CrearGasto() {
    // TODO
}

function listarGastos() {}
function anyadirGasto() {}
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
