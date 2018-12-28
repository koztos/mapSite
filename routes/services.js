const express = require('express');
const router = express.Router();
const terminals = require('../middleware/terminals');
const servers = require('../middleware/servers');

router.get('/', async (req,res) => {
    res.render('pages/services', {
        terminals:terminals,
        servers:servers
    });
});



module.exports = router;