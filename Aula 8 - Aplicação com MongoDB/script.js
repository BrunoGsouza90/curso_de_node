const usuarios = require('./database')

const usuario1 = new usuarios.Users()

usuario1.exibirUsuarios()
usuario1.deletarUsuario("Lucas")