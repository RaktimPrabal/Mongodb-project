const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
	if(err){
		return console.log("Unable to connect");
	}
	console.log("Connected to Server");

	var db= client.db('TodoApp');
	db.collection('Users').find({name: "Raktim"}).toArray().then((docs)=>{
		console.log("Users");
		console.log(JSON.stringify(docs, undefined, 2));
	},
		(err)=>{
			console.log("Unable to print find");
		});
	
	 //client.close();
})