function calcularSueldoMaximo() {
    let N = parseInt(prompt("¿Cuántos sueldos deseas ingresar?"));
    const lista = document.getElementById("listaSueldos");
    const resultado = document.getElementById("resultado");
  
    // Limpiar resultados anteriores
    lista.innerHTML = "";
    resultado.textContent = "";
  
    if (isNaN(N) || N <= 0) {
      alert("Número inválido.");
      return;
    }
  
    let max = Number.NEGATIVE_INFINITY;
    let sueldos = [];
  
    for (let i = 1; i <= N; i++) {
      let sueldo = parseFloat(prompt(`Introduce el sueldo #${i}:`));
  
      if (!isNaN(sueldo)) {
        sueldos.push(sueldo);
        if (sueldo > max) {
          max = sueldo;
        }
      } else {
        alert(`Sueldo #${i} inválido, no se cuenta.`);
      }
    }
  
    // Mostrar la lista de sueldos
    sueldos.forEach((sueldo, index) => {
      const li = document.createElement("li");
      li.textContent = `Sueldo #${index + 1}: $${sueldo}`;
      lista.appendChild(li);
    });
  
    // Mostrar el sueldo máximo
    resultado.textContent = `El sueldo máximo es: $${max}`;
  }
  