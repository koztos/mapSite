require('dotenv').config();
const express = require('express');
const app = express();
const index = require('./routes/index_routes');
const about = require('./routes/about');
const map = require('./routes/maps');

app.set('view engine', 'ejs');

app.use('/', index);
app.use('/about', about);
app.use('/map', map);

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port ${port}...`));