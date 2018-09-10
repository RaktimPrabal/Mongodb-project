//const MongoClient= require('mongodb').MongoClient;	
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
	if(err){
		return console.log("Unable to connect");
	}
	console.log("Connected to Server");

	var db= client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result)=>{
	// 	if(err){
	// 		return console.log("Unable to insert Todos", err);
	// 	};
	// 	console.log(JSON.stringify(result.ops, undefined,2));
	// });

	// client.close();

	db.collection('Users').insertOne({
		name: "Raktim",
		age: 22,
		location: "Pathsala"
	}, (err, result)=>{
		if(err){
			return console("Unable to insert to Users", err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	client.close();
})