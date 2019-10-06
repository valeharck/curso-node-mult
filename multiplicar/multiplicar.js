//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');


let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`====tabla de ${base}====`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            //colocamos el return para que no siga con la ejecucion ya que el reject sigue con la ejecucion
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err
            else
                resolve(`tabla-${ base }.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}