const { Console } = require('console');
const fs = require('fs');
const { dirname } = require('path');

//Leemos el archivo.txt
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

leer(`${__dirname}/archivo.txt`, console.log); //Sintaxis ES6

//Escribimos el archivo.txt creandolo
function escribir(ruta, contenido) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log('No se ha podido escribir', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

//Eliminamos el archivo
function borrar(ruta, cb) {
    fs.unlink(ruta, cb); //Elimina de manera asincrona
}

borrar(`${__dirname}/archivo1.txt`, console.log);
// leer(`${__dirname}/archivo.txt`, console.log);
// escribir(`${__dirname}/archivo1.txt`, 'Reescribo el archivo', console.log);