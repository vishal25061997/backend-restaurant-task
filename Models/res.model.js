const mongoose = require("mongoose");



const resSchema =  mongoose.Schema({
    name  : String,
    description: String,
    location: {
      type: { type: String },
      coordinates: [],
    },
    ratings: [Number],
  });
  
  resSchema.index({ location: '2dsphere' });
  
  const resModel = mongoose.model('Restaurant', resSchema);


  module.exports = {resModel}
  


  /*
  {
Name of restaurant : “ “
Description of restaurant : “ “
Location
Restaurant : {latitude, longitude}
Average Rating of the restaurant : 5
No. of Ratings: 3
}
  */