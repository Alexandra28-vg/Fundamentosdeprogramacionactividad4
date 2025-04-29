let numero;

do {
  numero = parseFloat(prompt("Introduce un número (negativo para salir):"));

  if (numero >= 0) {
    let cuadrado = numero * numero;
    alert(`El cuadrado de ${numero} es ${cuadrado}`);
  }

} while (numero >= 0);

alert("Has introducido un número negativo. Fin del programa.");
