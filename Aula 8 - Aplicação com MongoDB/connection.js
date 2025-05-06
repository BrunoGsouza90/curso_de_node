const { MongoClient } = require("mongodb")

class conexaoBanco {

    // url = "mongodb+srv://BrunoGsouza90:%40Picanha123@cluster0.4gu2lok.mongodb.net/cfbcursos?retryWrites=true&w=majority&appName=Cluster0"

    url = "mongodb://localhost:27017"

    client = {}

    async conectar() {

        try {

            this.client = await MongoClient.connect(this.url)

            console.log("✅ Conectado com sucesso!")

            return this.client

        } catch (error) {

            console.error("❌ Erro ao se conectar com o banco de dados:", error)

        }

    }

    async desconectar() {

        return await this.client.close()

    }

}

module.exports =  { conexaoBanco }