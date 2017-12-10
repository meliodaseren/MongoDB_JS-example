
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii-2017-07");

db.tmp.drop();

db.tmp.insert({_id:1,x:15});
db.tmp.insert({_id:2,x:15});

var ResultErr = db.runCommand({getLastError:1});
if(ResultErr.err){
  printjson(ResultErr);
}






