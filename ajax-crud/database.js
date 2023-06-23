const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    database: 'cadastrouser',
    user: 'root',
    password: ''
});

connection.connect(function(error){
    if(error){
        throw error; 
    }
    else{
        console.log("Conectado ao Banco MySQL")
    }
});

module.exports = connection;