const {Router} = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/',async (req,res) => {
    const response = await fetch('https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/ABARROTES SANTA MARIA ATZOMPA/20/1/15/7715bb2a-6563-49e3-952e-e81a8ccc79bc');
    const comercios = await response.json();
    console.log(comercios);
    res.json(comercios);
});

module.exports = router;
