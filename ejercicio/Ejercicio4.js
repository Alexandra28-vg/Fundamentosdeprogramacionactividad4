let entrada = prompt("Ingrese un número entero no negativo:");
let numero = parseInt(entrada);

if (isNaN(numero) || numero < 0) {
  alert("Por favor ingrese un número entero no negativo válido.");
} else {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  alert(`El factorial de ${numero} es ${factorial}`);
}

