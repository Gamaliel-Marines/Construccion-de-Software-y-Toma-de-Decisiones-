//* primer comando
console.log("hola desde node");

//el módulo filesystem sirve para acceder al sistema de archivos de la computadora
const fs = require('fs');

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

    fs.writeFile('/Users/gamalielmarines/Desktop/TC2005/Construccion-de-Software-y-Toma-de-Decisiones-/Lab - 8/se_escribio.txt', primera_frase, err => 
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

// TODO: 3/3

let celcius = 30;

function temperature (celcius)
{
    if(celcius > 28)
    {
        fs.writeFileSync("output.txt", "chill bro");
    }

    else if( celcius < 28 && celcius >= 20)
    {
        fs.writeFileSync("output.txt", "nice")
    }

    else if( celcius <= 19 && celcius > 0)
    {
        fs.writeFileSync("output.txt", "get moving man")
    }

    else
    {
        fs.writeFileSync("output.txt", "you dead *_*")
    }

}
temperature(celcius);



// http es un módulo que permite crear servidores web y manejar las peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Se Logro</h1>");
    response.write("hello world!");
    response.end();
});

server.listen(3000);