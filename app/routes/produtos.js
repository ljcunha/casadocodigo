//Arquivo das rotas de produtos

module.exports = function(app){
    console.log("carregando rota de produtos");
    app.get('/produtos', function(req,res){
    console.log("Listando...");

    var mssql = require('mssql');  

    var pool = new mssql.ConnectionPool({
        user: 'developer',
        password: 'K@t@n@07',
        server: 'ASGARD',  
        database: 'CasaDoCodigo',
        options: {
            instanceName: 'SQLEXPRESS'
        }
    }); 

    pool.connect()
        .then(function(){
            new mssql.Request(pool).query('Select * from livro',(err,result) => {
                res.send(result);
            });
        })
        .catch(function(err){
            console.log(err);
        });   
    });
}