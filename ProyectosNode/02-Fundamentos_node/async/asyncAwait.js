//La palabra async no es necesaria en las funciones, por que ya son asincronas por defeco
function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}
async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => { //Usamos la sintaxis ES6
        setTimeout(function () {
            console.log('Adiós, ' + nombre);
            //resolve();
            reject('Hay un error');
        }, 1000);
    })
}

// await hola('Facundo'); //Esto es una mala sintaxis
// await solo es valido dentro de una funcion asincrona 
async function main() {
    let nombre = await hola('Facundo');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso.')
}

console.log('Comienza el proceso...')
main();
console.log('Esta sera la segunda instruccion ejecutada')