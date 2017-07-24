db = connect("localhost:27017/iii-2017-07");

var showCursorItems = function(cursor) {
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

db.food2.drop()

db.food2.insert({apple:13,banana:13,peach:2});
db.food2.insert({apple:5,spinach:6,watermelon:83,xx:1})


cursor = db.food2.find({$where:function() {
	for(var current in this) {
		for(var other in this) {
			print("current: " + this[current] + ", other: " + this[other])
			if(current != other && this[current] == this[other]) {
				return true;
			}
		}
	}
	return false;
}});
showCursorItems(cursor);


// cursor = db.food2.find( {watermelon : {$exists:true}, $where:'this.watermelon >= 3 && this.apple > 3'} )
// showCursorItems(cursor);

// cursor = db.food2.find({$where:function(){
// 	var count = 0;
// 	for(var current in this){
// 		count++;
// 		if(count > 4){
// 			return true;
// 		}		
// 	}
// 	return false;
// }});
// showCursorItems(cursor);


// cursor = db.food2.find({$where:function(){
// 	var sum = 0;
// 	for(var current in this){
// 		if(current != '_id'){
// 			sum = sum + this[current];
// 			if(sum > 40){
// 				return true;
// 			}
// 		}	
// 	}
// 	return false;
// }});
// showCursorItems(cursor);