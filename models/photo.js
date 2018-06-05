const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Photo Schema & model
const PhotoSchema = new Schema({
  createur:{
    type : String
  },
  date:{
    type:String
  },
  src:{
    type:String
  }
});

//Creating a model -- assign to name collection in the DB
const Photo  = mongoose.model('photo',PhotoSchema);

//Export this model to use it in other files
module.exports = Photo ;
