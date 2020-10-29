const {Router} = require('express');
const router = Router();
const _ = require('underscore');
const funciones = require('./funciones.js');
const fetch = require('node-fetch');

router.post('/ubicaciones',async (req,res) => {
    const {Estado,Municipio,Colonia,Tipo} = req.body;
    if(Estado&&Municipio&&Colonia&&Tipo){
        console.log(funciones.region(Estado,Municipio,Colonia,Tipo));
        var region = funciones.region(Estado,Municipio,Colonia,Tipo);
        const arrCoor =[];
        const response = await fetch(region);
        const comercios = await response.json();

        _.each(comercios,(comercio,i) =>{
            const coor ={
                "Negocio":"",
                "Latitud": "",
                "Longitud": ""
            }
            coor.Negocio = comercio.Nombre;
            coor.Latitud = comercio.Latitud;
            coor.Longitud = comercio.Longitud;
            arrCoor.push(coor);
        });
        res.json(arrCoor);
    }
    else{
        res.status(500).json({error: 'There was an error'});
    }
});


module.exports = router;
