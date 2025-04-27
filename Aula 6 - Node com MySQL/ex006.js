const database = require("./database.js")

const consult = async () => {

    await database.excluirClientes({

        id: 4

    })

    // Listando os clientes.
    let listar_clientes = await database.listarClientes()

    console.log(listar_clientes)

}

consult()