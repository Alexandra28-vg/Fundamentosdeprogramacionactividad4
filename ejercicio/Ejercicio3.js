

let producto = 1;
let impares = [];

for (let i = 1; impares.length < 10; i += 2) {
  impares.push(i);
  producto *= i;
}

alert("Los 10 primeros números impares son: " + impares.join(", "));



