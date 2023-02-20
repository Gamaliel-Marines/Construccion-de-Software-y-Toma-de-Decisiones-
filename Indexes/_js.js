// coments
var desayuno = "hot cakes";

let comida = "alitas";

const precio = 120;

console.log("Hola");
console.info("No hay descuento" + precio);
console.warn("No vayas a cambiar el precio");
console.error("No cambies precio");

//*? estrictamente igual
console.assert(1===1);
// TODO: igual
console.assert(1==1);

//* ejemlpos
console.assert(1=="1");
console.assert(1==="1");
console.assert(1==true);
console.assert(1===true);

//* sigue viviendo
for(var i = 1; i <= 10; i++)
{

}
console.log(i);
//*! muere
for(let j = 1; j <= 10; j++)
{

}
//console.log(j);

//alertas, prompt, confirm
alert("Hello");
let nombre = prompt("Type your name: ");
let is_hungry = confirm("Tienes hambre?");
console.log(is_hungry);

//funciones trad
function numero_alitas()
{
    return 12;
}

console.log(numero_alitas());


// arrow functions
let cantidad_alitas = () => {return 12};
console.log(cantidad_alitas());



let boton = document.getElementById("contador de clicks");
boton.innerHTML = "Cuneta clicks";
boton.onclick = () => {
    let contador_clicks = 0;
    contador_clicks++;
    console.log(contador_clicks);
    document.getElementById("clicks").innerHTML = contador_clicks;

}


//arreglos
const arreglo = ["Elemento"];
arreglo.push("Otro elemento");
console.log(arreglo);
arreglo["dos"] = 2;
arreglo.length = 10;
console.log(arreglo);

// valores
for(let valor of arreglo)
{
    console.log(valor);
}

//indices
for(let elemento in arreglo)
{
    console.log(elemento);
}

//objetos
let objeto = 
{
    atributo_1: "valor_1",
    atributo_2: 2
}

objeto.atributo_3 = arreglo;

console.log(objeto);
console.log(objeto.atributo_1);

for(let elemento in arreglo)
{
    console.log(elemento);
}