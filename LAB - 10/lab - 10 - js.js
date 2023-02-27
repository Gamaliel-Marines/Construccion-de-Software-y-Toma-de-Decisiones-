const filesystem = require('fs');
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if(request.url === "/")
    {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Landing Page</h1>");
        response.write('<a href="/log-in">If you want to log in into your account click on this text</a>');
        response.write("</body></html>");
        response.end();
    }
    
    else if(request.url === "/log-in" && request.method === "GET")
    {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>LOG IN</h1>");
        response.write('<form action="/log-in" method="POST">');

        let form = `

            <div>
            
            <label for=»user»> Usuario: </label>
            
            <input type=»text» id=»user» required/>
            
            </div>
            
            <div>
            
            <label for=»password»> Contraseña: </label>
            
            <input type=»password» id=»password» required/>
            
            </div>
            
            <input type="submit" value="log-in">
        `;
        response.write(form);
        response.write("</form>");
        response.write("</body></html>");
        response.end();
    }
    
    else if(request.url === "/log-in" && request.method === "POST")
    {
        const datos = [];
        
        request.on('data', (dato) =>
        {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () =>
        {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);

            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write('<h1>You logged in</h1>');

            let respuesta = "<ul>";
            
            const datos_usuario = datos_completos.split('=')[0];
            if (datos_usuario !== "" )
            {
                respuesta += "<li>username</li>";
                respuesta += "<li>contraseña</li>";
            }

            try
            {
                if (datos_completos.split('&')[0].split('=')[0] != " " || datos_completos.split('&')[1].split('=')[0] != " ")
                {
                        respuesta += "<li>1 username</li>";
                }
            }
            
            catch (error)
            {

            }

            respuesta += "</ul>";

            response.write(respuesta);

            return response.end();
        });
        
    }

    //TODO: CHECK
    else 
    {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1> The document you are looking for is non existent </h1>");
        response.write("</body></html>");
        response.end();
    }
    
});

server.listen(3000);