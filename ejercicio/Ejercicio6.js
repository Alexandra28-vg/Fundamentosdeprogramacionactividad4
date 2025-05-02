let numero = parseInt(prompt("Ingrese un número entre 0 y 10:"));

if (isNaN(numero) || numero < 0 || numero > 10) {
  alert("Número inválido. Debe estar entre 0 y 10.");
} else {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
