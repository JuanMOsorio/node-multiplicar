// YARGS
const argv = require('yargs')
  // comando a hacer
  .command('listar', 'Imprime en consola la tabla de multiplicar', {
    // recibe la configuración de parametros que es comando puede recibir
    base: {
      demand: true,
      alias: 'b'
    },
    // recibe la configuración de parametros que es comando puede recibir
    limite: {
      alias: 'l',
      default: 10
    }
  })
  .command('crear', 'crea la tabla de multiplicar', {
    base: {
      demand: true,
      alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10
    }
  })
  .help()
  .argv;


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
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
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