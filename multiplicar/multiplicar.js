// requireds for filesystem
const fs = require('fs');
// const fs = require('express'); install to use
// const fs = require('./fs'); created

let  listarTabla = (base, limite = 10) => {

  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor de base introducido "${base}" no es un numero`);
      return;
    }

    if (!Number(limite)) {
      reject(`El valor de limite introducido "${limite}" no es un numero`);
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    resolve(data)

  });

}


let crearArchivo = (base, limite = 10) => {

  // creando promesa
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor introducido "${base}" no es un numero`);
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
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
module.exports = { 
  crearArchivo,
  listarTabla
};