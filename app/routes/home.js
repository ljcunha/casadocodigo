module.exports = function(app){
    app.get('/', function(req,res,next){
        var conn = app.infra.connectionFactory;
        var produtosDAO = new app.infra.ProdutosDAO(conn);

        produtosDAO.lista(function(err,result){
            if(err){
                 return next(err);
            }
            res.render('home/index', {livros: result});            
        });
        conn.end();
    });
}