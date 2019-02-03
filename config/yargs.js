const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Implime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea en un arhivo la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}