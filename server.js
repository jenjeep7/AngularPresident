var express = require('express');
var app = express();
var path = require('path');

var republicans =["Hockey Joe", "Bauer Todd", "Goalie Gus", "Wildcat Kevin", "Zamboni Zane"];
var democrats = ["Baseball Bob", "Swimming Suzie", "Lacross Larry", "Soccer Sam", ];
var candidates= republicans.concat(democrats);

var winner= candidates[Math.floor(Math.random()*candidates.length)];

console.log(winner);



app.use(express.static('server/public'));

app.get('/', function(request, response){
  console.log(__dirname);
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/republicans', function(request, response){
  response.send(republicans);
});

app.get('/democrats', function(request, response){
  response.send(democrats);
});
app.get('/winner', function(request, response){
  response.send(winner);
});


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("Listening on port", port);
});
