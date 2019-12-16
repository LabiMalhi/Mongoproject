var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) throw err;
	var mydbs = db.db("HastePickupService");
	
	var mydata =[{_id:"01", Driver_name:"shahrukh", Password:"01234", Email:"srk@icloud.com", License_number:"0987", Contact:"6478596541"},
	{_id:"02", Driver_name:"shahid", Password:"56789", Email:"shd@gmail.com",License_number:"6543", Contact:"4372349874"},
	{_id:"03", Driver_name:"ranbir", Password:"09876", Email:"rkb@outlook.com",License_number:"2109", Contact:"9053642187"},
	{_id:"04", Driver_name:"kartik", Password:"54321", Email:"krtk@yahoo.com", License_number:"8765", Contact:"3056489217"}];

	
	mydbs.collection("Driver_data").insertMany(mydata,function(err,response){
	if (err) throw err;
	
	console.log("Driver Collections are entered! ");
	db.close();	
	});
});
