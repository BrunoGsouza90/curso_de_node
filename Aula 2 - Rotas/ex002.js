const http = require('http')

const porta = process.env.PORT

const host = "127.0.0.1"

const servidor = http.createServer((request, response) => {

    response.writeHead(200, {

        "Content-Type": "text/html"

    })

    if(request.url == '/'){

        response.write("<h1>Pagina principal.</h1>")

    } else if(request.url == '/contato'){

        response.write("<h1>Pagina de contato:</h1>")

    } else if(request.url == '/cfbcursos'){

        response.write("<h1>Bem-Vindo ao canal CFB Cursos.</h1>")

    } else {

        response.write("<h1>404 - Not Found</h1>")

    }

    response.end()

})

servidor.listen(porta || 3000, host, () => {

    console.log("Servidor rodando!")

})