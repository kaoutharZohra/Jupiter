var mongoose = require('mongoose');  
var dataBaseSchema = new mongoose.Schema({   
  name: {
    type: String,
    required: true
  },
  modality: {
    type: String,
    required: true
  },
  sensor: {
    type: String,
    required: true
  },
  resolution: {
    type: Number,
    required: true
  },
  numberTot: {
    type: Number,
    required: true
  },
  numberScans: {
    type: Number,

    required: true
  },
  url: {
    type: String
  },
  numberScans: {
    type: Number,

    required: true
  },
    updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now }
});
 // on every save, add the date
dataBaseSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
 

var DataBase = mongoose.model('DataBase', dataBaseSchema);

/** export schema */
module.exports = {
    DataBase: DataBase
};


