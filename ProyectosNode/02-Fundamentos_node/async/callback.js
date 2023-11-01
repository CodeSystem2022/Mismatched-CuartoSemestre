function hola(nombre, miCallBack){
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallBack(nombre);
    }, 1000);
}
//Los callback puede compartir toda la informacion
function adios(nombre, otroCallBack){
    setTimeout( function(){
        console.log('Adiós, '+ nombre );    
    }, 1000);
}
console.log('Iniciando el proceso');
hola('Carlos', function(nombre) {
    adios(nombre, function(){
        console.log('Terminando el proceso');
    });
    
});

//hola('Carlos', function(){});
//adios('Carlos', function(){});

