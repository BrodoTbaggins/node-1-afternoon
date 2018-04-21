const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/message_controllers');

const app = express();

app.use( bodyParser.json() );
app.use(express.static('../public/build'))

const baseURL = "/api/messages";
app.post( baseURL, mc.create);
app.get(baseURL, mc.read);
app.put(`${baseURL}/:id`, mc.update);
app.delete(`${baseURL}/:id`, mc.delete);

const port = 3000;
app.listen( port, () => { console.log(`The kitchen is cooking on port ${port}.`);});