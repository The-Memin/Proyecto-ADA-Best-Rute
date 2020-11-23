//Ruta Para adceder a los datos de los comercios

const {Router} = require('express');
const router = Router();
const _ = require('underscore');
const funciones = require('./funciones.js');
const fetch = require('node-fetch');
const L = 'leaflet'         

router.post('/ubicaciones',async (req,res) => {
    const {Estado,Municipio,Colonia,Tipo,Ubicacion} = req.body;
    if(Estado&&Municipio&&Colonia&&Tipo){
        var region = funciones.region(Estado,Municipio,Colonia,Tipo);
        const arrCoor =[];
        const response = await fetch(region);
        if(response.ok){
        const comercios = await response.json();

        _.each(comercios,(comercio,i) =>{
            const coor ={
                "Negocio":"",
                "Latitud": "",
                "Longitud": ""
            }
            if(comercio.Ubicacion== Ubicacion){
                coor.Negocio = comercio.Nombre;
                coor.Latitud = comercio.Latitud;
                coor.Longitud = comercio.Longitud;
                arrCoor.push(coor);
            }
        });
        res.json(arrCoor);
        }
        else{
            res.status(500).json({error: 'Datos no validos'});
        }
    }
    else{
        res.status(500).json({error: 'There was an error'});
    }
});


module.exports = router;
