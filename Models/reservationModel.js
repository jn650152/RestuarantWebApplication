var mongoose = require("mongoose");
var schema = mongoose.Schema;
var reservationSchema = new schema({
	name: String,
	gender: String,
	age: Number,
	dateOfBirth: Date,
	country:String,
	reservationDate: Date,
	time: String,
	people: Number,
	email: String,
	wechat: String,
	facebook: String,
	primaryContack: String

});
var reservationModel = mongoose.model("reservationModel", reservationSchema);
module.exports = reservationModel;
