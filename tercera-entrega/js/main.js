let nombre = ""
do{nombre = prompt("Ingresa Tu Nombre") } while( ! isNaN(nombre))

console.log("bienvenidx " + nombre)

function convertir() {

    let valore = 0
    let resultado = 0
    let dolar = 545
    let euro = 300.89
    let real = 58

    valore = parseFloat(document.getElementById("valor").value)
    
    if(isNaN(valore)|| valore <= 0){
        return console.log("INGRESE UN NÚMERO, MAYOR A 0 ")
    }

    if (document.getElementById("Dolar").checked) {
        resultado = valore / dolar
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Dolar es de: $" + resultado)
    }
    
    else if (document.getElementById("Euro").checked) {
        resultado = valore / euro;
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Euro oficial es de: €" + resultado);
    }
    else if (document.getElementById("Reales").checked) {
        resultado = valore / real;
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Reales es de: R" + resultado);
    }
    
    else {
        console.log("Debes completar todos los campos")
    }
}