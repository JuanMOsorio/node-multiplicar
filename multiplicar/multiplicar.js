// requireds for filesystem
const fs = require('fs');
// const fs = require('express'); install to use
// const fs = require('./fs'); created


let crearArchivo = base => {

  // creando promesa
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor introducido "${base}" no es un numero`);
      return;
    }

    let data = '';

    for (let i = 1; i <= 10; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    // creando y escribiendo en el archivo de texto
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if 
        (err) reject(err);
      else
        resolve(`tabla-${base}.txt`);
    });   

  });

}

// exportar el modulo
module.exports = { crearArchivo };