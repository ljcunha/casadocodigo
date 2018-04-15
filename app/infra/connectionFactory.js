var mysql = require('mysql');  

function dbConnection(){
    return mysql.createConnection({
            host: 'localhost',
            user: 'developer',
            password: 'K@t@n@07',
            database: 'CasaDoCodigo',
    });
}

module.exports = function(){
    return dbConnection();
}