bokin
var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) throw err;
	var mydbs = db.db("HastePickupService");
	
	var mydata =[{"booking_id":"31","date_from":"may17","date_to":"aug05","booking_status":"ongoing"},
	{"booking_id":"32","date_from":"sep11","date_to":"oct01","booking_status":"terminated"},
	{"booking_id":"33","date_from":"nov14","date_to":"dec31","booking_status":"complete"},
	{"booking_id":"34","date_from":"feb08","date_to":"mar19","booking_status":"ongoing"}];

	
	mydbs.collection("Booking").insertMany(mydata,function(err,response){
	if (err) throw err;
	
	console.log("Booking Collections are entered! ");
	db.close();	
	});
});
