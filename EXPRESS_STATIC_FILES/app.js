var express = require('express');
var app = express(); 

const path = require('path')

//modifica la chiamata alla funzione get di Express
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'home.html'));  // ritorna la cartella del progetto(__dirname)
});

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));  // ritorna la cartella del progetto(__dirname)
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname,'about.html'));           //metodo get per raggiungere la pagina about.html
});

app.get('/sitemap', function(req,res){
    res.sendFile(path.join(__dirname,'sitemap.html'));        //metodo get per raggiungere la pagina sitemap.html
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
