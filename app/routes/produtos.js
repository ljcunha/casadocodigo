//Arquivo das rotas de produtos

module.exports = function(app){
    console.log("carregando rota de produtos");
    app.get('/produtos', function(req,res){
        console.log("Listando...");
        res.render("produtos/lista");
    });
}