const express = require('express');
const router = express.Router();
const hosts = require('../middleware/hosts');


router.get('/', async (req,res) => {

    res.render('pages/map', {
        hosts:hosts
    });
});



module.exports = router;