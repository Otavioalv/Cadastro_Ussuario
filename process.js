//process

const express = require('express');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    database: 'cadastrouser',
    user: 'root',
    password: ''
  });

var database_connection_status = '';
connection.connect(function(error){
    if(error){
        database_connection_status = `<h3 class='text-center text-danger'>Erro conexão com banco de dados</h3>`
    }
    else{
        database_connection_status = `<h3 class='text-center text-success'>Conexão bem sucedida com Banco de Dados</h3>`
    }
});


const app = express();

app.use(express.urlencoded());

app.get('/', function(request, response, next){
    response.send(`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <div class="container">
            `+database_connection_status+`
            <div class="card">
                <div class="card-header">Cadastro</div>
                <div class="card-body">
                    <form method="POST" action="/">
                        <div class="mb-3">
                            <label>Nome</label>
                            <input type="text" name="nome" id="nome" class="form-control" placeholder="Nome"/>
                        </div>
                        <div class="mb-3">
                            <label>Data de Nascimento</label>
                            <input type="date" class="form-control" id="dataNas" name="dataNas" placeholder="data de nascimento"/>
                        </div>
                        <div class="mb-3">
                            <label>Foto</label>
                            <input type="file" name="foto" id="foto" class="btn btn-primary" multiple/>
                        </div>

                        <div class="mb-3">
                            <label for="endereco">Endereço</label>
                            <input type="text" class="form-control" id="endereco" name="endereco" placeholder="endereço"/>
                        </div>

                        <div class="mb-3">
                            <label for="sexo">Sexo</label>
                            <input type="text" class="form-control" id="sexo" name="sexo" placeholder="sexo"/>
                        </div>

                        <div class="mb-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="passwor" placeholder="Password"/>
                        </div>

                        <div class="mb-3">
                            <input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>`
    );
});

app.post('/', function(req, res, nex){
    res.send(req.body);
});

app.listen(2000, function(){
    console.log("Servidor Rodando na URL http://localhost:2000");
});
