// variables, constantes, consola (log, info, warn, error, assert)
var desayuno = "hot cakes";

let comida = "alitas";

const precio = 120;

console.log("Hola");
console.info("No hay descuentos, el precio es: " + precio);
console.warn("No le vayas a cambiar el precio");
console.error("Que no le vayas a cambiar el precio");

console.assert(1 === 1);
console.assert(1 == 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);

// Alcance de las variables
for (var i = 1; i <= 10; i++) {

}
console.log(i);

for (let j = 1; j <= 10; j++) {

}
//console.log(j);


// funciones tradicionales
function numero_alitas() {
    return 12;
}

console.log(numero_alitas());

//arrow function
let cantidad_alitas = () => { return 12 };
console.log(cantidad_alitas());

let boton = document.getElementById("contador_clicks");
boton.innerHTML = "Cuenta clicks!";
boton.onclick = () => {
    let contador_clicks = Number(document.getElementById("clicks").innerHTML);
    contador_clicks++;
    console.log(contador_clicks);
    document.getElementById("clicks").innerHTML = contador_clicks;
    boton.classList.add("is-danger");

    const colores =  
    [
        "is-primary", 
        "is-link", 
        "is-dark",
        "is-black",
        "is-danger"


    ]

    const index = Math.floor(Math.random() * colores.length);

    boton.classList = ["button"];


    boton.classList.add(colores[index]);
}


// arreglos
const arreglo = ["Elemento"];
arreglo.push("Otro elemento");
arreglo["dos"] = 2;
arreglo.length = 10;
console.log(arreglo);

//Recorre los valores del arreglo
for (let valor of arreglo) {
    console.log(valor);
}

//Recorre los índices del arreglo
for (let elemento in arreglo) {
    console.log(elemento);
}


//Objetos
let objeto = {
    atributo_1: "valor 1",
    atributo_2: 2
}

objeto.atributo_3 = arreglo;

console.log(objeto);

console.log(objeto.atributo_1);

for (let atributo in objeto) {
    console.log(atributo);
}


























//arreglos asociativos