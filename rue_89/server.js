var express = require('express');
var app = express();
var sqlite3 = require("sqlite3").verbose();

var fs = require("fs");
var file = "base.db";
var exists = fs.existsSync(file);  
var db = new sqlite3.Database(file);

app.use(express.static('public'));

app.get('/test', function (req, res, next) {
  db.all("SELECT * from table1", function(err, row) {
        res.json(row);
    });
    db.close;

})




var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})