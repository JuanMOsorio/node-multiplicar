
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 2;

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))
  .catch(error => console.log(error));