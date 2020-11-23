
const fun = {};

function entidadf(estado){
    switch(estado){
        case "Oaxaca":
            return 20;
        case "Puebla":
            return 21;
    }
}

function region(Estado, Municipio, Colonia, Tipo){
    var lugar = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/';

    if(Municipio != " "){
        lugar += Municipio;
    }
    if(Colonia != " "){
        if(Municipio !=" ")
            lugar+=" ";
        lugar += Colonia;
    }
    if(Tipo != " "){
        if(Municipio !=" ")
            lugar+=" ";
        lugar += Tipo;
    }
    if(Municipio==" "&&Colonia==" "&&Tipo==" ")
        lugar += Estado;

    lugar += '/'+entidadf(Estado);
    lugar += '/1/100/7715bb2a-6563-49e3-952e-e81a8ccc79bc'
    return lugar;
}

fun.region = region;
fun.entidadf = entidadf;
module.exports = fun;