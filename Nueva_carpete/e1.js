var numero1= 5;
var numero2=8;
var texto1= "El numero 1 es: ";
var texto2= "El numero 2 es: ";
if (numero1<numero2){
    alert("numero1 no es mayor que numero2");
}
if(numero2 > 0){
    alert("el numero2 es positivo");
}
if (numero1<0){
    alert("el numero1 es negativo o distinto a cero");
}
numero1+=1;
alert("el numero 1 es: "+numero1);
if(numero1<numero2){
    
    alert("Incrementar en 1 el valor de numero1, no lo hace igual o mayor a numero2");
}
texto1=texto1+numero1;
texto2=texto2+numero2
document.getElementById("contenido_4").innerHTML = texto1;
document.getElementById("contenido_4").innerHTML = texto2;

//
var j= 0;
var vector = [''];
vector[0]=texto1;
vector[1]=texto2;
while (j < 2) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("El número es: " + vector[j]);
    node.appendChild(textnode);
    document.getElementById("contenido_4").appendChild(node);
    j++;
}