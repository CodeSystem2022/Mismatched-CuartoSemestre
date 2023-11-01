console.log('Inicio del programa');
setTimeout(() => {
    console.log('Primer TimeOut')
}, 3000);
setTimeout(() => {
    console.log('Segundo TimeOut')
}, 0);
setTimeout(() => {
    console.log('Tercero TimeOut')
}, 0);
console.log('Fin del programa');
//Instrucciones no bloqueantes, sincronas