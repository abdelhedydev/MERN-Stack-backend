const express = require('express');
const router = express.Router() // our router obj
const User = require('../models/user');
const Photo = require('../models/photo');


//insted of app.get
//we dont need for /api

//Get a list of users from DB
router.get('/users',function (req,res,next) {
  User.find({}).then(function (users) {
    res.send(users);
  })
})

//Update users
router.put('/users/:id',function (req,res,next) {
  User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(user){
    User.findOne({_id:req.params.id}).then(function(user){
        res.send(user);
    });

  });

});

//delete user
router.delete('/users/:id',function (req,res,next) {
  User.findByIdAndRemove({_id:req.params.id}).then(function (user) {
        res.send(user);
  });
})

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////


//Photos api

//Get a list of photos from DB
router.get('/photos',function (req,res,next) {
  Photo.find({}).then(function (photos) {
    res.send(photos);
  })
})

//Update photo
router.put('/photos/:id',function (req,res,next) {
  Photo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(photo){
    Photo.findOne({_id:req.params.id}).then(function(photo){
        res.send(photo);
    });

  });

});

//delete photo
router.delete('/photos/:id',function (req,res,next) {
  Photo.findByIdAndRemove({_id:req.params.id}).then(function (photo) {
        res.send(photo);
  });
})



//export this file to be used in index.js
module.exports = router;
