function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livro',callback);
}

ProdutosDAO.prototype.salva = function(produto,callback){
    this._connection.query('insert into livro set ?', produto, callback);
}

ProdutosDAO.prototype.carrega = function(Id, callback){
    this._connection.query('select * from livro where Id = ?', Id, callback);
}

ProdutosDAO.prototype.apagar = function(Id, callback){
    this._connection.query('delete from livro where Id = ?', Id, callback);
}

ProdutosDAO.prototype.alterar = function(produto, callback){
    this._connection.query('update livro set ? where Id = ?', [produto, produto.id], callback);
}

module.exports = function(){
    return ProdutosDAO;    
}