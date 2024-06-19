/**movimientos bancarios */
const movimientos = [100, -200, 100, -400];

/** utiliza .map para indicar si se ha efectuado un "ingreso" o una "retirada" ["ingreso", "retirada", "ingreso", "retirada"] */
const categorizarMovimientos = movimientos.map(m => {
    return m > 0 ? "ingreso" : "retirada"
});

// EJERCICIO: Cambia el cuerpo de la función de callback para usar un operador ternario y obtener el mismo resultado. BONUS: hazlo en una sola línea

console.log("🚀 ~ file: array-map.js:65 ~ categorizarMovimientos ~ categorizarMovimientos:", categorizarMovimientos);