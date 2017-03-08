var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

// you can optionally supply other values
var config = {
        user: 'sugandha11',
        database: 'sugandha11',
        host: 'db.imad.hasura-app.io',
        port: '5432',
        password: 'db-sugandha11-67191',
       // password: process.env.DB_PASSWORD,

};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt){
    var hashed=crypto.pdkdf2Sync(input,salt,10000,512,'sha512');
    return["pdkdf2","10000", salt, hashed.toString('hex')].join('$');
    
}

app.get('/hash/:input', function (req, res) {
    var hashedString=hash(req.params.input,'this-is-some-ramdom-word');
    res.send(hashedString);
});


// create the pool somewhere globally so its lifetime
// lasts for as long as your app is running
var pool = new Pool(config);

app.get('/test-db', function (req, res) {
    
    pool.query('SELECT "title", "category" FROM "article" WHERE "category" = \'Work\'', function(err,result) {
     if (err) {
         res.status(500).send(err.toString());
     }
     else {
         res.send(JSON.stringify(result.rows));
     }
     });
    
});


var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
    // get names from request
    var name = req.query.name;
    //    var name = req.params.name;
    
    names.push(name);
    //json javascript Object Notation
    res.send(JSON.stringify(names));

});




app.get('/article-one',function (req, res){
    res.send('article one  is here!!');
});

app.get('/article-two',function (req, res){
    res.send('article two  is here!!');
});

app.get('/article-three',function (req, res){
    res.send('article three  is here!!');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
