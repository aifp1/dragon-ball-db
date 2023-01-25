const express = require('express');

const router = express.Router();

router.get('/', async(req, res, next) =>{
    try {
        res.send('Listado de personajes');        
    } catch (e) {
        throw new Error(e);
    }
});

module.exports = router;