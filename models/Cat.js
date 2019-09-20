const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
/*
const catSchema = new Schema({
  name : String,
  color: String,
  age  : Number
});
*/
const catSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0, max: 30 },
    color: { type: String, enum: ['white', 'black', 'brown'] },
    avatarUrl: { type: String, default: 'images/default-avatar.png' },
    location: {
      address: String,
      city: String
    },
    created: { 
      type: Date,
      default: Date.now
    }
  });

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;