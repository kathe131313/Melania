var colores = ['rojo', 'verde', 'azul'];
var texto = "Los colores definidos son: ";
for (i = 0; i < colores.length; i++) {
    texto += colores[i] + ",";
}

alert(texto);
document.getElementById("contenido_1").innerHTML = texto;