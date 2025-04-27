const express = require("express")

const rotas = require("./rotas.js")

const host = "127.0.0.1"

const porta = process.env.PORT || 3000

const app = express()

app.use("/", rotas)

app.get("*", (request, response) => {

    response.send("CFB Cursos")

})

app.listen(porta, host, () => {

    console.log("Servidor rodando!")

})