// Aqui estamos usando o módulo "Express" ao invés de usarmos o Módulo "HTTP".
const express = require("express")

const app = express()

const porta = process.env.PORT

const host = "127.0.0.1"

app.get("/", (request, response) => {

    response.send("Seja Bem-Vindo!")

})

app.get("/canal", (request, response) => {

    response.json({

        canal: "CFB Cursos"

    })

})

app.listen(porta || 3000, host, () => {

    console.log("Servidor rodando!")

})