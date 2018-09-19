const express = require("express");
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

// CONFIGURACION PARA HEROKU
const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public') );

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get("/", (req, res) => {
     
    //Indica que renderice el home.hbs
    res.render('home', {
        nombre: 'josé manuel garcía fernández'
    });
 });
 app.get("/about", (req, res) => {
     
    //Indica que renderice el home.hbs
    res.render('about', {
        nombre: 'josé manuel garcía fernández'
    });
 });

app.listen( port , () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
