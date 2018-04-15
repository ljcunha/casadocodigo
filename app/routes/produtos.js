module.exports = function(app){
    console.log("carregando rota de produtos");
    app.get('/produtos', function(req,res){
        console.log("Listando...");     

        var conn = app.infra.connectionFactory;

        var ProdutosDAO = new app.infra.ProdutosDAO(conn);

        ProdutosDAO.lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });   

        conn.end;
    });
    
    app.get('produtos/remove', function(){

        var conn = app.infra.connectionFactory;
        var produtosBanco = app.infra.produtosBanco(conn);
        var produto = produtosBanco.carrega(conn,id,callback);
    
        if(produto){
            produtosBanco.remove(conne,produto,callback);
        }
    
    });
}