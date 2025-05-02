let facturacionTotal = 0;
let litrosArticulo1 = 0;
let facturasMayores600 = 0;

for (let i = 1; i <= 5; i++) {
  let codigo = parseInt(prompt(`Factura ${i} - Código del artículo (1, 2 o 3):`));
  let litros = parseFloat(prompt(`Factura ${i} - Cantidad vendida en litros:`));
  let precio = parseFloat(prompt(`Factura ${i} - Precio por litro:`));

  // Validaciones básicas
  if (isNaN(codigo) || isNaN(litros) || isNaN(precio) || litros < 0 || precio < 0) {
    alert("⚠️ Datos inválidos. Esta factura será ignorada.");
    continue;
  }

  let importe = litros * precio;
  facturacionTotal += importe;

  if (codigo === 1) {
    litrosArticulo1 += litros;
  }

  if (importe > 600) {
    facturasMayores600++;
  }
}

alert(
  `📊 RESULTADOS:\n` +
  `✅ Facturación total: $${facturacionTotal.toFixed(2)}\n` +
  `🧪 Litros vendidos del artículo 1: ${litrosArticulo1} L\n` +
  `📄 Facturas con importe > $600: ${facturasMayores600}`
);

