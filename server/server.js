/**
 * Created by divanvisagie on 2014/11/18.
 */
var express = require('express');

var app = express();

app.get('/data',function(req,res){

  res.send(
    [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'kjlsdafkjlhdsak an angular app', done:false}
    ]
  );
});

app.use(express.static(__dirname + '/client'));

app.listen(8080);