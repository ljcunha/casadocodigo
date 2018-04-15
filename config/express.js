var express = require('express');
var load = require('express-load');

var app = express();

module.exports = function (){
    //Definindo a máquina de páginas
    app.set('view engine', 'ejs');

    //Definindo onde está a pasta de views
    app.set('views','./app/views');

    load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}
