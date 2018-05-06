var mysql = require('mysql');  

function dbConnection(){
    if(!process.env.NODE_ENV){
        return mysql.createConnection({
                host: 'localhost',
                user: 'developer',
                password: '123456',
                database: 'CasaDoCodigo',
        });
    }

    if(process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
                host: 'localhost',
                user: 'developer',
                password: '123456',
                database: 'CasaDoCodigo_test',
        });
    }


}

module.exports = function(){
    return dbConnection();
}