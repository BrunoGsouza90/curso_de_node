const connection = async () => {

    if(global.conexao && global.conexao.state != "disconected"){

        return global.conexao

    }

    const mysql = require("mysql2/promise")

    const con = await mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'curso_de_node'

    })

    console.log("Conexão com o Banco realizada com sucesso!")

    global.conexao = con

    return con

}

const listarClientes = async () => {

    const con = await connection()

    const result = await con.query("SELECT * FROM clientes")

    return result[0]

}

const inserirClientes = async (data) => {

    try {

        const con = await connection()

        const values = [data.nome, data.idade]
    
        await con.query(`INSERT INTO clientes (nome, idade) VALUES (?, ?)`, values)

        console.log("Cliente adicionado com sucesso!")

    } catch (error) {

        console.log(`Erro ao inserir cliente:\n\n ${error.message}`)

    }

}

const atualizarClientes = async (data) => {

    try {

        const con = await connection()


        const values = [data.nome, data.idade, data.id]

        await con.query("UPDATE clientes SET nome = ?, idade = ? WHERE id = ?", values)

        console.log("Cliente atualizado com sucesso!")

    } catch (error) {

        console.log(`Erro ao atualizar cliente:\n\n ${error.message}`)

    }

}

const excluirClientes = async (data) => {

    try {

        const con = await connection()


        const values = [data.id]

        await con.query("DELETE FROM clientes WHERE id = ?", values)

        console.log("Cliente deletado com sucesso!")

    } catch (error) {

        console.log(`Erro ao deletar cliente:\n\n ${error.message}`)

    }

}

module.exports = { listarClientes, inserirClientes, atualizarClientes, excluirClientes }