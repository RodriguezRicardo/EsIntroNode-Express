const express = require('express');
const http = require('http');
const path = require('path')
const app = express(); 

var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/products', (req, res) => {
    var jsonData = {
    "products":[{
    "_id": {
        "$oid": "5968dd23fc13ae04d9000001"
    },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
    }, {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
    }, {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"}]};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});

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
