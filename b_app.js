const mongoose = require('mongoose');
const User = require('./models/User.js');

mongoose
  .connect('mongodb://localhost/userExample', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

//Create  
User.create({ username: 'Alice', nickname: 'Frog', linkedinProfile: "https://www.linkedin.com/AliceTheHumptidumpti" })
  .then(user => { console.log('The user is saved and its value is: ', user) })
  .catch(err => { console.log('An error happened:', err) });

//Read an array of objects with query
User.find({ nickname: "FROG" }, { username:1, linkedinProfile: 1 }, { sort: { _id: 1 }, limit:2 }).then(
  (users) => {
    users.forEach(
      (user, index) => console.log("Position:" + index + " User:" + user)
    )
  }
).catch(
  (err) => console.log("Couldn't find user because of this error:" + err)
)
/*
//Read the first object with query
User.findOne({ nickname: "FROG" }, { linkedinProfile: 1 }, { sort: { _id: 1 } }).then(
  (user) => console.log("\n One User:" + user)  
).catch(
  (err) => console.log("Couldn't find user because of this error:" + err)
)

//Read the object defined by it's Id
User.findById({ nickname: "FROG" }, { linkedinProfile: 1 }, { sort: { _id: 1 } }).then(
  (user) => console.log(" One User:" + user)  
).catch(
  (err) => console.log("Couldn't find user because of this error:" + err)
)


let successCallback = (value) => console.log("\nSuccess return value:"+JSON.stringify(value));
let errorCallback = (err) => console.log("Database returned this error:"+err);

//Update the objects defined by the query, update with the specified data
User.updateMany({nickname:"QUEEN"},{nickname:"Princess"}).then(successCallback).catch(errorCallback);

//Update the first object defined by the query, update with the specified data
User.updateOne({ username: "Alice"}, { nickname: "Peter Pan" }).then(successCallback).catch(errorCallback);

//Update the object specified by the Id
User.findByIdAndUpdate("someId", { nickname: "I don't exist" }).then(successCallback).catch(errorCallback);

//Delete all the objects specified by the query
User.deleteMany({nickname:"PRINCESS"}).then(successCallback).catch(errorCallback);

//Delete the first object specified by the query
User.deleteOne({ username: "Alice"}).then(successCallback).catch(errorCallback);

//Delete the object specified by the Id
User.findByIdAndRemove("someID").then(successCallback).catch(errorCallback);

User.countDocuments({ username: 'Alice' }).then(count => { console.log(`\n There are ${count} Alices`) }).catch(err => { console.log(err) });
*/