///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Fruit = require("./fruit")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////// 
// Seed Route: A route on our server when requested will delete everything in our database and re - seed it with some starter data
// Seed File: A script we can run (usually called seed.js) that'll empty and re-seed our database.

// AKA - fake data for testing and/or demoing

// Make sure code is not run till connected
mongoose.connection.on("open", () => {
	///////////////////////////////////////////////
	// Write your Seed Code Below
	//////////////////////////////////////////////

	// Run any database queries in this function
	const startFruits = [
		{ name: "Orange", color: "orange", readyToEat: false },
		{ name: "Grape", color: "purple", readyToEat: false },
		{ name: "Banana", color: "orange", readyToEat: false },
		{ name: "Strawberry", color: "red", readyToEat: false },
		{ name: "Coconut", color: "brown", readyToEat: false },
	]

	// Delete all fruits
	Fruit.deleteMany({}, (err, data) => {
		// Seed Starter Fruits
		Fruit.create(startFruits, (err, data) => {
			// log the create fruits to confirm
			console.log("--------FRUITS CREATED----------")
			console.log(data)
			console.log("--------FRUITS CREATED----------")

			// close the DB connection
			mongoose.connection.close()
		})
	})
})