function mostrarContador() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = ""; // Limpia resultados anteriores
  
    for (let i = 0; i <= 99999; i++) {
      let numero = i.toString().padStart(5, '0');      // Asegura 5 dígitos
      let convertido = numero.replace(/3/g, 'E');       // Reemplaza 3 con E
      let conGuiones = convertido.split('').join('-');  // Añade guiones
      resultado.textContent += conGuiones + "\n";
    }
  }
  