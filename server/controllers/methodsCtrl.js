
var mongoose = require('mongoose');
var Method = require('../models/method').Method;
//mongoose.Promise = global.Promise;
 
/** create function to create Method. */
exports.create = function (req, res) {
 
   // new Thread({title: req.body.title, author: req.body.author}).save();
Method =new Method({name:req.body.name,
    modality: req.body.modality,module: req.body.module, 
    nbMaxParm: req.body.nbMaxParm, description: req.body.description,
     header: req.body.header , ref: req.body.ref});
    Method.save( function(err, result) {
        if (!err) {

            return res.json(result);
        } else {
  
            return res.send(err); // 500 error
        }
    });
};

/** getMethod function to get Method by id. */
exports.getAll = function (req, res) {
   

    Method.find({}, function(err, dbs) {
    var dbMap = {};

    dbs.forEach(function(db) {
      dbMap[db._id] = db;
    });

    res.send(dbMap);  
  });
};

/** getMethod function to get Method by id. */
exports.get = function (req, res) {
   
     Method.find({_id: req.params.id}, function(err, db) {
            if (err)
                res.send(err);
            res.json(db);
        });
};

/** updateMethod function to get Method by id. */
exports.update = function (req, res) {
   // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
Method.findOneAndUpdate(req.params._id, req.body, function (err, db) {  
    // Handle any possible Method errors
      if (err)
                res.send(err);
            res.json(db);
   
});
}

/** removeMethod function to get Method by id. */
exports.delete = function (req, res) {
    Method.findOneAndRemove({name: req.params.name}, function(err, result) {
    
    res.send(result);  
  });
}


  