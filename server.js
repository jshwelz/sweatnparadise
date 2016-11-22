var express = require ('express');
var app = express();
var mongojs = require ('mongojs');
var db = mongojs('snpContact',['snpContact']);
var dbnews = mongojs('snpNewsLetter',['snpNewsLetter']);
var dbBookDates = mongojs('BookDates',['BookDates']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public" ));
app.use(bodyParser.json());


app.get('/calendar',function (req, res) {
   console.log("I receive a get request from calendar ")
   dbBookDates.BookDates.find(function (err, docs) {
      console.log(docs);
      res.json(docs);
   });
});


app.post('/contact',function(req,res){
    //console.log(req.body);
    console.log("I receive a post request")
    db.snpContact.insert(req.body,function(err,doc){
      res.json(doc)
   });
});

app.post('/news',function(req,res){
    //console.log(req.body);
    console.log("I receive a post request from newsletter");
    dbnews.snpNewsLetter.insert(req.body,function(err,doc){
      res.json(doc)
   });
});

// app.get('/',function(req,res){
// 		res.send("Josh you are awesome")

// 	});
app.listen(3000);
console.log("mother fucker");
