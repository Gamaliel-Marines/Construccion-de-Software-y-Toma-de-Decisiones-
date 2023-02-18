
let fisrt_answer = prompt("Type a number: ");

document.write("<table>")

for(let i = 1; i <= fisrt_answer; i++)
{
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i*i + "</td>");
    document.write("<td>" + i*i*i + "</td>");
    document.write("</tr>");
}

document.write("</table>")


let first_time = Date.now();
let fisrt_number = Math.floor(Math.random()*10 );
let second_number = Math.floor(Math.random()*10 );
let third_number = fisrt_number + second_number;
let second_answer = prompt("Type the result of the sum: " + fisrt_number + " and " + second_number);

if(third_number == second_answer)
{
    document.write("<h2> Respuesta Correcta </h2>");
    let second_time = Date.now();
    let third_time = (second_time - first_time) / 1000;
    document.write("<h3> Timepo de respuesta: " + third_time + "</h3>")
}

else
{
    document.write("<h2> Respuesta Incorrecta </h2>");
    let forth_time = Date.now();
    let fifth_time = (forth_time - first_time) / 1000;
    document.write("<h3> Tiempo de Respuesta: " + fifth_time + "</h3>")

}

const array = [-2,-1,0,0,1,2,3];

function contador(array) 
{

    let negatives = [];
    let i_n = 0;
    let zeros = [];
    let i_z = 0;
    let positives = [];
    let i_p = 0;

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] < 0)
        {
            negatives.push(array[i]);
            i_n++;
        }

        if (array[i] == 0)
        {
            zeros.push(array[i]);
            i_z++;
        }

        if (array[i] > 0)
        {
            positives.push(array[i]);
            i_p++;
        }

    }

    document.write("<h2> Los numeros negativos son: " + i_n + "</h2>");
    document.write("<h2> Los numeros positivos son: " + i_p + "</h2>");
    document.write("<h2> Los ceros  son: " + i_z + "</h2>"); 
}

contador(array);


const array_1 = [1,2,3];
const array_2 = [4,5,6];
const array_3 = [7,8,9];

const array_arrays = [array_1, array_2, array_3];

function promedios(array_arrays) 
{
    let promedio = 0;
    console.log(array_arrays);

    document.write("<table>")

    for (let i = 0; i < array_arrays.length; i++)
    {
        let suma = 0;
        let result = [];
        let cont = 0;
        console.log(array_arrays[i]);
        for(let j = 0; j < array_arrays[i].length; j++)
        {
            suma = suma + array_arrays[i][j];
            cont++;
        }
        promedio = suma / cont;
        console.log(promedio);

        document.write("<tr>");
        document.write("<td>" + promedio + "</td>");
        document.write("</tr>");
    }

    document.write("</table>")
    
}

promedios(array_arrays);

let num_param = prompt("Type any number: ");

function reverseNumber(num_param) {
  let convertAndReverse = num_param.toString().split("").reverse().join("");
  document.write("<h2> El numero que ingresaste al reves es: " + convertAndReverse + "</h2>")
}

reverseNumber(num_param); 