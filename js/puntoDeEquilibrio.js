const costosFijos = leerCostosFijos();
const precioDeVenta = leerPrecioDeVenta();
const costosVariables = leerCostosVariables();

function leerCostosFijos() {
    let costo;
    do {
        costo = Number(prompt('Costos Fijos'))
    }while(!costo || costo < 0);

    return costo;
}

function leerPrecioDeVenta() {
    let precio;
    do {
        precio = Number(prompt('Precio de venta'))
    }while(!precio || precio < 0);

    return precio;
}

function leerCostosVariables() {
    let cosVar;
    do {
        cosVar = Number(prompt('Costos Variables'))
    }while(!cosVar || cosVar < 0);

    return cosVar;
}

function calcularPuntoEquilibrio(costosFijos, precioDeVenta, costosVariables) {
  return costosFijos / (precioDeVenta - costosVariables);
}

function mostrarPuntoEquilibrio() {
  const puntoEquilibrio = calcularPuntoEquilibrio(costosFijos, precioDeVenta, costosVariables);
  alert(`El Punto de equilibrio es: ${puntoEquilibrio}`);
}

mostrarPuntoEquilibrio();

function reiniciarPagina() {
    window.location.reload();
  }