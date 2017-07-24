var mongo = require('mongodb')
var host = 'localhost';
var port = 27017;   //mongo.Connection.DEFAULT_PORT; //27017
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii-2017-07',server,{safe:true})

console.log('1. call db.open()');
db.open(function(err,db){
	if(err) throw err;
	else{
		console.log('3. open DB: OK');
		db.close();
	}
});

console.log('2. call db.on(close,function)');

db.on('close',function(err,db){
	if(err) throw err;
	else console.log('4. close DB: OK');
})



