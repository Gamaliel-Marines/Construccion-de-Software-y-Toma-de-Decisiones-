//* primer comando
console.log("hola desde node");

//el módulo filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require('fs');

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

// TODO: 3/3


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