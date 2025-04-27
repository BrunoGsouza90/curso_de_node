const express = require("express")

const multer = require("multer")

const fs = require("fs")

const path = require("path")

const port = process.env.PORT

const host = process.env.HOST

const app = express()

// Criar a pasta onde os arquivos serão salvos caso não exista.
if (!fs.existsSync('files')) {

  fs.mkdirSync('files')

}

const storage = multer.diskStorage({

    // Diretório aonde os arquivos serão salvos.
    destination: function (request, file, cb) {

        cb(null, `${__dirname}/files`)

    },

    // Definindo o nome do arquivo.
    filename: function (request, file, cb) {

        const id = Date.now() + '-' + Math.round(Math.random() * 100);
        cb(null, `${id} ${path.extname(file.originalname)}`);

    }

})

// Gerando o arquivo na pasta.
const upload = multer({ storage: storage })

app.post('/upload', upload.array('arquivo', 5),  (request, response) => {

    fs.readFile("index.html", "utf8", (error, file) => {

        if (error) {

            throw error;

        } else {

            const message = "Arquivo enviado com sucesso!"

            const request_message = file.replace("{{saudacao}}", "Seja bem-vindo!").replace("{{message}}", message);
    
            response.writeHead(200, { "Content-Type": "text/html" });

            response.write(request_message);

            response.end();

        }

    })

})

app.get('/', (request, response) => {

    response.status = 200

    fs.readFile("index.html", "utf8", (error, file) => {

        if(error) {

            throw error

        } else {

            let request_message = file.replace("{{saudacao}}", "Seja bem-vindo!").replace("{{message}}", "")

            response.writeHead(200, {

                "Content-Type" : "text/html"

            })

            response.write(request_message)

            response.end()

        }

    })

})

app.listen(port || 3000, host || "127.0.0.1", () => {

    console.log("Servidor rodando!")

})