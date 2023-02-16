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