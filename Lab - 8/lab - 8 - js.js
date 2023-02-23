//* primer comando
console.log("hola desde node");

//el módulo filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require('fs');

// filesystem.writeFileSync('hola.txt', 'Hola desde node');


// const arreglo = [5000, 60, 61, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// //Imprimir de manera asíncrona los elementos del arreglo (se imprimen en orden por su valor)
// for (let item of arreglo) {
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// } 

const arreglo_promedio = [1,2,3];

// TODO: 1/3.
function promedio_de_un_arreglo(arreglo_promedio)
{

    let contador = 0;
    let suma = 0;

    for(let i = 0; i < arreglo_promedio.length; i++)
    {
        suma = arreglo_promedio[i] + suma;
        contador++;
    }

    let promedio = suma/contador;

    console.log(promedio);

}

promedio_de_un_arreglo(arreglo_promedio);

// TODO: 2/3

let primera_frase = "hello_world"

function escribir_en_archivo(primera_frase)
{
    const fs = require('fs');

    fs.writeFile('/Users/gamalielmarines/Desktop/TC2005/Construccion-de-Software-y-Toma-de-Decisiones-/se_escribio.txt', primera_frase, err => 
    {
        if (err)
        {
            console.error(err);
        }
    
        else
        {
            console.log("es escribio correctamenta en el archivo!!");
        }
    }
    );
}

escribir_en_archivo(primera_frase);

// http es un módulo que permite crear servidores web y manejar las peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Hot cakes</h1>");
    response.write("hola desde Node!");
    response.end();
});

server.listen(3000);