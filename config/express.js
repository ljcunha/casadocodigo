var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

module.exports = function (){
    //Definindo a máquina de páginas
    app.set('view engine', 'ejs');

    //Definindo onde está a pasta de views
    app.set('views','./app/views');

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}
