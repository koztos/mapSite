const express = require('express');
const router = express.Router();
const terminals = require('../middleware/terminals');
const config = require('config');

const key = config.get('key');

router.get('/', async (req,res) => {
    res.render('pages/services', {
        terminals:terminals
    });
});



module.exports = router;