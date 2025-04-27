const express = require("express")

const rotas = express.Router()

let cursosInfo = [

    {

        curso: "NodeJS",
        info: "Curso de NodeJS"

    },

    {

        curso: "JavaScript",
        info: "Curso de JavaScript"

    },

    {

        curso: "Python",
        info: "Curso de Python"

    },

    {

        curso: "React",
        info: "Curso de React"

    }

]

rotas.get('/', (request, response) => {

    response.json({

        mensagem: "Deu certo!"

    })

})

// Rota com parâmetro.
rotas.get('/:cursoid', (request, response) => {

    const curso = request.params.cursoid

    const cursoInfo = cursosInfo.find(i => i.curso.toLocaleLowerCase() == curso.toLocaleLowerCase())

    if(!cursoInfo){

        response.status(404).json({

            error: "Curso não encontrado!"

        })

    } else {

        response.status(200).json({

            curso: cursoInfo

        })

    }

})

module.exports = rotas