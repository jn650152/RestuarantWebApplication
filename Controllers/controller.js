var reservationModel = require("../Models/reservationModel.js");

/*//direct to main page
exports.goToMainPage = function(req, res){
	res.render("brewery_tour.html");
};
*/

//listing all reservation
exports.createReservation = function(req, res){
	//res.send("post a new reservation not yet");
	//connect to local mongodb
	var mongoose = require("mongoose");
	mongoose.Promise = require("bluebird");
	var promise = mongoose.connect("mongodb://localhost/restuarant",{
		useMongoClient:true
	});
	promise.then(function(db){
		var newReservation = new reservationModel({
			name: req.body.Name, 
        		gender: req.body.Gender,
        		age: req.body.Age,
        		dateOfBirth: req.body.DateOfBirth,

        		country:req.body.Country,
        		reservationDate: req.body.ReservationDate,

        		time: req.body.time,
       			people: req.body.people,
        		email: req.body.Email,
        		wechat: req.body.Wechat,
        		facebook: req.body.Facebook,

        		primaryContack: req.body.Contact
		});
		newReservation.save(function(err){
			if(err){return;}
			console.log("before redirect");
			res.redirect("/brewery_tour.html");
		});
	});
};
//insert a new reservation
exports.searchAllReservations = function(req, res){
	//res.send("get all reservations not yet");
	var mongoose = require("mongoose");
	mongoose.Promise = require("bluebird");
	var promise = mongoose.connect("mongodb://localhost/restuarant", {
		useMongoClient: true
	});

	promise.then(function(db){
		reservationModel.find().exec(function(err, results){
			if (err) {return;}
			console.log("researchAll");
			if (results.count!=0){
				console.log(results);
				res.send(results);
			}else{
				console.log("not found any");
				res.send("found nothing");
			}
		});
	});

};
