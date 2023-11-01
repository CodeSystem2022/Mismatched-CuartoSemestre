function hola(nombre, miCallBack){
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallBack(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function () {
        console.log('bla bla bla');
        callbackHablar();
    }, 1000);
}
//Los callback puede compartir toda la informacion
function adios(nombre, otroCallBack){
    setTimeout( function(){
        console.log('Adiós, '+ nombre );    
    }, 1000);
}
function conversacion(nombre, veces, callback){
    if(veces > 0 ){
        hablar( function (){
            conversacion(nombre, --veces, callback);
        });
    } else {
        callback(nombre, callback);
    }
}

//--Procesos principal
console.log('Iniciando el proceso');
hola('Ariel',function(nombre){
    conversacion(nombre, 4, function(){
        console.log('Terminando el proceso');
    });
});

// hola('Carlos', function(nombre) {
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 hablar(function(){
//                     adios(nombre, function(){
//                         console.log('Terminando el proceso');
//                     });
//                 });    
//             });
//         });
//     });
// });
