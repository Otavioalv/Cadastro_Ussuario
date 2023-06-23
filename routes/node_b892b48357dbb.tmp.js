var express = require('express');
var router = express.Router();
var database = require('../database');
var bodyParser = require('body-parser');
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extendido: true }));

router.get('/', function(req, res, nex) {
    var query = "SELECT * FROM pessoas ORDER BY id DESC";

    database.query(query, function(err, dat) {
        if(err){
            throw err;
        }
        else{
            res.render('sample_data', {
                title: 'Nodejs mysql crud app',
                action: 'list',
                sampleData: dat 
            });
        }
    });
});


router.get('/add', function(req, res, nex){
    res.render('sample_data', {
        title: 'Insert Data MySql',
        action: 'add'
    })
});

router.post('/add_sample_data', function(req, res, nex) {
    var nome = req.body.nome;
    var dataNas = req.body.dataNas;
    var foto = req.body.foto;
    var endereco = req.body.endereco;
    var sexo = req.body.sexo;
    var passwor = req.body.passwor;                                

    var query = `
        INSERT INTO pessoas
        (nome, dataNas, foto, endereco, sexo, passwor)
        VALUES ("${nome}", "${dataNas}", "${foto}", "${endereco}", "${sexo}", "${passwor}"); 
    `
    
    database.query(query, function(error, data) {
        if(error) {
            throw error;
        }else{
            res.redirect("/sample_data");
        }
    });
});

router.get('/edit/:id', function(req, res, nex) {
    var id = req.params.id;
    
    var query = `
        SELECT * FROM pessoas WHERE id = ${id};
    `

    database.query(query, function(error, data) {
        res.render('sample_data', {
            title: 'Tabela Atualizada', 
            action: 'edit',
            sampleData: data[0]
        });
    });
});

router.post('/edit/:id', function(req, res, nex){
    var id = req.params.id;
    var nome = req.body.nome;
    var foto = req.body.foto;
    var endereco = req.body.endereco;
    var passwor = req.body.passwor;
    
    var query = `
        UPDATE pessoas 
        SET nome = "${nome}",
            foto = "${foto}",
            endereco = "${endereco}",
            passwor = "${passwor}"
        WHERE id = "${id}";`

    database.query(query, function(error, data) {
        if(error) {
            throw error;
        }else {
            res.redirect('/sample_data');
        }
    });
});


router.get('/sample_data/delete/:id', function(req, res, nex){
    var id = req.params.id;

    var query = `
        DELETE FROM pessoas WHERE id = "${id}";
    `;

    database.query(query, function(error, data) {
        if(error) {
            throw error;
        }else {
            res.redirect('/sample_data');
        }
    });
});

module.exports = router;