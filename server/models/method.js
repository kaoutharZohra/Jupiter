var mongoose = require('mongoose');  
var MethodSchema = new mongoose.Schema({   
  
  name: {
    type: String,
    required: true
  },
  modality: {
    type: String,
    required: true
  },
  module: {
    type: String,
    required: true
  },
  nbMaxParm: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  listeParam: {
    type: Array,

  },
  url: {
    type: String
  },
  header: {
    type: String,

    required: true
  },
  ref: {
    type: String,

    required: true
  },
    updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now }
});
 // on every save, add the date
MethodSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
 

var Method = mongoose.model('Method', MethodSchema);

/** export schema */
module.exports = {
    Method: Method
};


