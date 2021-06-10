var http = require("http");

http.createServer(function(req,res){
    res.end("Resposta final");
}).listen(8080);

/*
var express = require('express')
var index = express();

index.set('view engine', 'ejs');

index.get('/home', function(req, res){
    res.render("../Views/home");
});
index.get('/', function(req ,res ){
    res.send('Olá mundo');
});

index.get('/form/:nome', function(req, res ){
    res.send('<h1>' + req.params.nome  + '<h1>')
});
index.listen(3000, function (){
    console.log('executando na porta 3k!');
})
*/