const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',           // Insira o hots do Banco de Dados
    database: 'cadastrouser',   // Insira o nome do Banco de Dados
    user: 'root',               // Insira o nome de ussuario
    password: ''                // Insira a senha 
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