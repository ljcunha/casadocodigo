var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController',function(){
    /*Para trazer o banco para o estado zero.*/
    beforeEach(function(done){
        var conn = express.infra.connectionFactory;
        conn.query("delete from produtos", function(ex,result){
            /*if(!ex) {
                done();
            }*/
            done();
        });
    });

    it('#listagem json',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('#listagem html',function(done){
        request.get('/produtos')
        .set('Accept','text/html')
        .expect('Content-Type',/html/)
        .expect(200,done);
    });
    it('#Cadastra produto com dados inválidos',function(done){
        request.post('/produtos')
        .send({titulo:"",descricao:"Livro qualquer"})
        .expect(400,done);
    });
    it('#Cadastra produto com dados válidos',function(done){
        request.post('/produtos')
        .send({titulo:"Livro Bolado",descricao:"Livro qualquer", preco:52.00})
        .expect(302,done);
    });   
});
