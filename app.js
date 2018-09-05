// YARGS
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {

  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(lista => console.log(lista))
      .catch(error => console.log(error));
  break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
      .catch(error => console.log(error));
  break;
  default:
    console.log(`Comando no reconocido`);

}

// console.log(argv);

// let argv2 = process.argv;

// console.log(argv.limite)

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);