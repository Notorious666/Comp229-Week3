let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a model class
let contactModel = mongoose.Schema({
name: String,
number: Number,
email: String,
},
{
 collection: "contacts"
});
module.exports = mongoose.model('Contact' , contactModel);