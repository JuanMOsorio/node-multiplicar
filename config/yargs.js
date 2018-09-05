// OPCIONES
const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  // recibe la configuración de parametros que es comando puede recibir
  limite: {
    alias: 'l',
    default: 10
  }
};

// YARGS
const argv = require('yargs')
  // comando a hacer
  .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
  .command('crear', 'crea la tabla de multiplicar', opts)
  .help()
  .argv;

module.exports = { argv };
