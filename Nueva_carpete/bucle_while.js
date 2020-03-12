var i = 0;
var text = "";
while (i < 10) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("El número es " + i);
    node.appendChild(textnode);
    document.getElementById("contenido_4").appendChild(node);
    i++;
}