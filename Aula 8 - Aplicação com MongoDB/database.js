const conectar = require('./connection.js')

class Users extends conectar.conexaoBanco {

    // Exibir todos os usuários.
    async exibirUsuarios() {

        const client = await this.conectar()

        const database = client.db("users")

        try {

            let users = await database.collection("cursos").find({}).toArray()

            console.log(users)

        } catch(error) {

            console.log("❌ Erro ao exibir usuários: " . error)

        }

        finally {

            await this.desconectar()

            console.log("✅ Banco desconectado com sucesso!")
            
        }

    }

    // Filtrar usuários por nome.
    async exibirUsuario(username) {

        const client = await this.conectar()

        const database = client.db("users")

        try {

            let user = await database.collection("cursos").findOne({nome: username})
            
            console.log(user)

        } catch(error) {

            console.log("❌ Erro ao exibir usuários: " . error)

        }

        finally {

            await this.desconectar()

            console.log("✅ Banco desconectado com sucesso!")
            
        }

    }

    // Inserir usuários.
    async inserirUsuario(nome, idade, status) {

        const client = await this.conectar()

        const database = client.db("users")

        const data = {

            nome: nome,
            idade: idade,
            status: status

        }

        await database.collection("cursos").insertOne(data)

        console.log("✅ Curso adicionado com sucesso!")

        await this.desconectar()

        console.log("✅ Banco desconectado com sucesso!")

    }

    // Deletar usuário.
    async deletarUsuario(username) {

        const client = await this.conectar()

        const database = client.db("users")

        try {

            await database.collection("cursos").deleteOne({nome: username})

            console.log("✅ Usuário deletado com sucesso!")

        } catch(error) {
           
            console.log("❌ Erro ao deletar usuário: " . error)

        }

        finally {

            await this.desconectar()

            console.log("✅ Banco desconectado com sucesso!")

        }

    }

}

module.exports = { Users }