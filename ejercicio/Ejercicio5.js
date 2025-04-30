let positivos = [];
let negativos = [];
let ceros = 0;

for (let i = 0; i < 10; i++) {
  let entrada = prompt(`Ingrese el número ${i + 1}:`);
  let num = parseFloat(entrada);

  if (isNaN(num)) {
    alert("Entrada inválida. Por favor ingrese un número.");
    i--; // volver a pedir el mismo número
    continue;
  }

  if (num > 0) {
    positivos.push(num);
  } else if (num < 0) {
    negativos.push(num);
  } else {
    ceros++;
  }
}

// Calcular medias
let mediaPos = positivos.length > 0 ? positivos.reduce((a, b) => a + b, 0) / positivos.length : 0;
let mediaNeg = negativos.length > 0 ? negativos.reduce((a, b) => a + b, 0) / negativos.length : 0;

// Mostrar resultados
console.log(`Media de números positivos: ${mediaPos}`);
console.log(`Media de números negativos: ${mediaNeg}`);
console.log(`Cantidad de ceros: ${ceros}`);
