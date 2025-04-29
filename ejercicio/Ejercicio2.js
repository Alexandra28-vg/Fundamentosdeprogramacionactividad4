let numeroObjetivo = parseInt(prompt("Introduce el número a adivinar:"));
let intento;
let intentos = 0;

do {
  intento = parseInt(prompt("Adivina el número:"));
  intentos++;

  if (intento > numeroObjetivo) {
    alert("Menor, intenta de nuevo.");
  } else if (intento < numeroObjetivo) {
    alert("Mayor, intenta de nuevo.");
  } else {
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
  }
} while (intento !== numeroObjetivo);
