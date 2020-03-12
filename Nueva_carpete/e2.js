var numero=prompt("Introduce un numero y se mostrara su factorial");
var resultado=1;
var texto= 'El valor factorial es: ';
for(var i=1;i<=numero;i++){
    resultado*=i;
    }
    alert(resultado);
    //texto= texto+resultado;
    document.getElementById("contenido_3").innerHTML = texto;   