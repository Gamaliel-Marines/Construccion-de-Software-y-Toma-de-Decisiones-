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
            
            <label for="contraseña"> Contraseña: </label>
            
            <input type="password"  id="password" required/>
            
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
        
            //corre el if
            try
            {
                if (datos_completos.split('&')[0] != " " || datos_completos.split('&')[1] != " ")
                {
                        respuesta += "<li>1 username</li>";
                        respuesta += "<li>1 password</li>";      
                }
            }
            
            //si hay un error lo "atrapa"
            catch (error)
            {
                //"corre" esto para que no se "caiga"
            }
            respuesta += "</ul>";
            response.write(respuesta);
            return response.end();
        }); 
        
    }

    else 
    {
        //! manda el 404 -> archivo no encontrado
        response.statusCode = 404;
        //el tipo de contenido que va a tener el archivo (html)
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