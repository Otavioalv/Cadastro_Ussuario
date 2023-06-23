<h1>Cadastro ussuario</h1>
<div>
    <p>
    <h3>Durante o desenvolvimento do projeto de cadastro de usuário para o estágio, eu inicialmente planejava implementar o CRUD usando AJAX para melhorar a experiência do usuário. No entanto, durante a fase de pesquisa e desenvolvimento, encontrei uma escassez de recursos e informações suficientes para prosseguir com a implementação do AJAX no contexto específico do projeto.
    Embora eu tenha investido tempo considerável pesquisando e tentando encontrar soluções, a complexidade da integração AJAX com o back-end e as limitações de tempo para conclusão do projeto me levaram a optar por uma abordagem alternativa, sem a utilização de AJAX.
    Em vez disso, optei por utilizar tecnologias como Node.js e Express.js para criar as rotas e o servidor, além do MySql para armazenar os dados dos usuários. Foi desenvolvido um cadastro de usuário funcional com as operações CRUD básicas.
    Apesar de não ter implementado a funcionalidade específica do AJAX, estou confiante em minha capacidade de aprender e adaptar tecnologias e frameworks adicionais conforme necessário, caso seja uma exigência para o cargo de estágio. Estou comprometido em continuar expandindo meu conhecimento e habilidades na área da programação. Alem disso tem uma branch com uma pequena parte das minhas tentativa com AJAX</h3>
    </p>
</div>

<div>
    <h1>Como iniciar o Cadastro</h1>
    <ul>
        <li>Clone o codigo</li>
        <li>No terminal digite <b>npm install</b></li> 
        <li>
            <div>
                <p>No arquivo <b>database.js</b> coloque as informações do servidor MySql para o funcionamento do Cadastro</p>

![Alt text](image.png)
            </div>
        </li>
        <ul>
            <li>Na propriedada <b>host</b> coloque o seu host</li>
            <li>Na propriedada <b>database</b> coloque o seu banco de dado <b>MySql</b></li>
            <li>Na propriedada <b>user</b> coloque o seu ussuario</li>
            <li>Na propriedada <b>password</b> coloque sua senha</li>
            <li>crie uma tabela no banco de dados selecionado usando esse codigo <br><br><b>create table pessoas(
                id int primary key auto_increment not null,
                nome varchar(100),  dataNas date,
                foto blob, 
                endereco varchar(150),
                sexo varchar(1),
                passwor varchar(10) -- Tipo hipotetico
            );</b><br><br>
            <li>Inicie o servidor MySql</li>
            </li>
        </ul>
        <li>Servidor configurado. No terminal digite <b>npm start</b>
        </li>
        <li>No navegador digite a url: <b>http://localhost:3000/sample_data</b></li>
        <li>Pronto. Agora e só testar!!!</li>
    </ul>
</div>