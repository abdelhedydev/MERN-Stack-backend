const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create user Schema & model
const UserSchema = new Schema({
  full_name:{
    type : String
  },
  date:{
    type:String
  },
  categorie:{
    type:String
  }
});

//Creating a model -- assign to name collection in the DB
const User  = mongoose.model('user',UserSchema);

//Export this model to use it in other files
module.exports = User ;
