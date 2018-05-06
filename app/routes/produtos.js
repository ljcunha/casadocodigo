module.exports = function(app){
    console.log("carregando rota de produtos");
    app.get('/produtos', function(req,res,next){
        console.log("Listando...");     

        var conn = app.infra.connectionFactory;
        var produtosDAO = new app.infra.ProdutosDAO(conn);

        produtosDAO.lista(function(err, results){
            if(err){
                return next(err);
            }
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
            
        });   

        conn.end;
    });
/*
    app.get('/produtos/:Id', function(req,res){
        var conn = app.infra.connectionFactory;
        var produtosDAO = new app.infra.ProdutosDAO(conn);
        var Id = req.params.Id;
        console.log(Id);

        produtosDAO.carrega(Id, function(err,results){
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });

        conn.end;

    });
    */
    
    app.get('/produtos/form', function(req,res){
        console.log("Carregando form de produtos...");
        res.render('produtos/form',{validationErrors:{},produto:{}});
    });

    app.post('/produtos', function(req,res){
        var produto = req.body;
        var conn = app.infra.connectionFactory;

        var produtosDAO = new app.infra.ProdutosDAO(conn);

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();      

        var errors = req.validationErrors();
        if(errors){
            res.status(400);
            res.format({
                html:function(){
                    res.render('produtos/form',{validationErrors:errors,produto:produto});
                },
                json:function(){
                    res.send(errors);
                }
            });            
            return;
        }


        produtosDAO.salva(produto,function(err,results){
            res.redirect('/produtos');
        });

        conn.end;
    });

    app.delete('/produtos', function(req,res){
        var produto = req.body;
        var conn = app.infra.connectionFactory;

        var produtosDAO = new app.infra.ProdutosDAO(conn);

        produtosDAO.apagar(produto,function(err,results){
            res.redirect('/produtos');
        });

        conn.end;
    });

    app.put('/produtos', function(req,res){
        var produto = req.body;
        var conn = app.infra.connectionFactory;

        var produtosDAO = new app.infra.ProdutosDAO(conn);

        produtosDAO.alterar(produto,function(err,results){
            res.redirect('/produtos');
        });

        conn.end;
    });

    
}