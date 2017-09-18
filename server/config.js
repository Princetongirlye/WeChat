var mysql = require("mysql");

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  port:'3306',
  database:'yepei'
});

connection.connect();

var goodsAddSql = 'insert into goods(id,foodName,description) values(1,?,?)';
var goodsAddSql_info = ['柠檬茶系列','welcome'];

connection.query(goodsAddSql,goodsAddSql_info,function(err,result){
  if(err){
    console.log('[insert error]-',err.message);
    return;
  }
  console.log("----------insert-------------");
  console.log('Insert ID:',result);
  console.log("-----------------------------");
});

connection.end();