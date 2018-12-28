const express = require('express');
const router = express.Router();
const terminals = require('../middleware/terminals');


router.get('/', async (req,res) => {

    res.render('pages/services', {
        terminals:terminals
    });
});



module.exports = router;