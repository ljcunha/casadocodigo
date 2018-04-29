var http = require('http');


var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var client = http.request(configuracoes,function(res){
    console.log(res.statusCode);
    console.log(produtoStore);
    res.on('data',function(body){
        console.log('Corpo:'+body);
    });
});

var produtoStore = {
    titulo: "Node.js teste_" + new Date().getSeconds(),
    descricao: new Date().getDate() + "_" 
             + new Date().getHours() + "_" 
             + new Date().getMinutes() + "_" 
             + new Date().getSeconds(),
    preco:100
};

client.end(JSON.stringify(produtoStore));