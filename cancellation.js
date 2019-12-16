var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) throw err;
	var mydbs = db.db("HastePickupService");
	
	var mydata =[{"booking_id":"32","booking_date":"sep11","booking_status":"terminated"},
		{"booking_id":"35","booking_date":"aug19","booking_status":"cancelled"}];

	
	mydbs.collection("Cancellation").insertMany(mydata,function(err,response){
	if (err) throw err;
	
	console.log("Cancellation Collections are entered! ");
	db.close();	
	});
});
