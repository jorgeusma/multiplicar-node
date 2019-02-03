const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=========================================================='.red);
    console.log(`================== Tabla de ${base } =====================`.red);
    console.log('=========================================================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} \n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                return reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }

        });


    })

}

module.exports = {
    crearArchivo,
    listarTabla
}