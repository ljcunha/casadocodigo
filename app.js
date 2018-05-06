var app = require('./config/express')();

//A linha abaixo perdem a função qdo utilizamos espress-load
//var rotaProdutos = require('./app/routes/produtos')(app);


app.listen(3000,function(){
    console.log("Servidor online...");
});