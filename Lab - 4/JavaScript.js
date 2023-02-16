
alert("Hello");
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
console.assert();

let first_time = Date.now();
let fisrt_number = Math.floor(Math.random()*10 );
let second_number = Math.floor(Math.random()*10 );
let third_number = fisrt_number + second_number;
let second_answer = prompt("Type the result of the sum " + fisrt_number + " and " + second_number);

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

let array = [4, -5, 0, 2, -67, 8, 10, -34 ];

function contador(array) {

    let negatives = [];
    let zeros = [];
    let positives = [];

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] < 0)
        {
            negatives.push(array[i]);
        }

        if (array[i] == 0)
        {
            zeros.push(array[i]);
        }

        if (array[i] > 0)
        {
            positives.push(array[i]);
        }

    }

    document.write("<h2> Respuesta Incorrecta </h2>");
    
}