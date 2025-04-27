// Aqui inicializamos o objeto de requisições HTTP.
const http = require('http')

// Aqui inicializamos o nosso servidor.
http.createServer((request, response) => {

    // Montagem do cabeçalho devolvendo uma resposta "OK" em formato de texto.
    response.writeHead(200, {
        
        'Content-Type': 'text/plain'
    
    })

    // Resposta a ser retornada.
    response.write("CFB Curso. Curso de NodeJS.\n")

    response.end()

}).listen(1337)