const http = require("http")

// Importando a biblioteca nativa do NodeJS para manipulação de arquivos.
const fs = require("fs")

const porta = process.env.PORT

const host = "127.0.0.1"

const server = http.createServer((request, response) => {

    response.status = 200

    // Aqui estamos lendo um arquivo.
    fs.readFile('index.html', (error, file) => {

        if(error){

            throw error

        } else {

            response.writeHead(200, {

                "Content-Type" : "text/html"
        
            })
    
            response.write(file)
    
            return response.end()

        }

    })

    // Aqui estamos criando um arquivo.
    let conteudo = "Bruno, Lucas, Eduardo"

    fs.appendFile('teste.txt', conteudo, (error) => {

        if(error){

            throw error

        } else {

            console.log("Arquivo criado com sucesso!")

        }

    })

    fs.

})

server.listen(porta || 3000, host, () => {

    console.log("Servidor rodando!")

})