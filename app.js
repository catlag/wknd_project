var express = require("express"),
  async = require("async"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  passportLocal = require("passport-local"),
  cookieParser = require("cookie-parser"),
  session = require("cookie-session"),
  db = require("./models/index"),
  flash = require('connect-flash'),
  methodOverride = require('method-override'),
  request = require('request'),
  app = express();
 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/projects', function(req,res){
  res.render('projects');
});

app.get('/aboutme', function(req,res){
  res.render('aboutme');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/experience', function(req,res){
  res.render('experience');
});


app.get('*', function(req,res){
  res.render('404');
});


app.listen(process.env.PORT || 3000, function(){
  "Server is listening on port 3000. Yay!";
});