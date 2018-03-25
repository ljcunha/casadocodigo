var express = require('express');
var app = express();

//Definindo a máquina de páginas
app.set('view engine', 'ejs');

//Definindo onde está a pasta de views
app.set('views','./app/views');

console.log("Carregando Express...");

module.exports = function (){
    return app;
}
