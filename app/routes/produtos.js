module.exports = function(app){
    console.log("carregando rota de produtos");
    app.get('/produtos', function(req,res){
        console.log("Listando...");     

        var conn = app.infra.connectionFactory;

        var produtosBanco = app.infra.produtosBanco(conn);

        produtosBanco.lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });   

        conn.end;
    });
    
   // app.get('/produtos/detalhe', function(req,res){

   // });
}