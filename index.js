require('dotenv').config();
const express = require('express');
const app = express();
const index = require('./routes/index_routes');
const about = require('./routes/about');
const service = require('./routes/services');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/about', about);
app.use('/services', service);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));