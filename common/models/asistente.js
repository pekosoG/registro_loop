'use strict';

module.exports = function(Asistente) {

    //Testing validations
    Asistente.validatesPresenceOf('nombre','apellidop','apellidom','correo');

    //This is not supposed to work on mysql but it does
    Asistente.validatesUniquenessOf('nombre',{message:'Field should be unique'});

    //Remote mehod attempt
    Asistente.status=function(cb){
        var response='Tiny Riiiiiiiiiiick!';
        console.log('i got something! '+response);
        cb(null,response);
    };

    Asistente.remoteMethod(
        'status',{
            http:{
                path:'/status',
                verb:'get'
            },
            returns:{
                arg:'status',
                type:'string'
            }
        }
    );

};
