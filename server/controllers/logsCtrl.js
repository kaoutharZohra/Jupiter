
var mongoose = require('mongoose');
var Log = require('../models/log').Log;
//mongoose.Promise = global.Promise;
 
/** create function to create Log. */
exports.create = function (req, res) {
 
   // new Thread({title: req.body.title, author: req.body.author}).save();
Log =new Log({name:req.body.name,
    modality: req.body.modality,module: req.body.module, 
    nbMaxParm: req.body.nbMaxParm, description: req.body.description,
     header: req.body.header , ref: req.body.ref});
    Log.save( function(err, result) {
        if (!err) {

            return res.json(result);
        } else {
  
            return res.send(err); // 500 error
        }
    });
};

/** getLog function to get Log by id. */
exports.getAll = function (req, res) {
   

    Log.find({}, function(err, dbs) {
    var dbMap = {};

    dbs.forEach(function(db) {
      dbMap[db._id] = db;
    });

    res.send(dbMap);  
  });
};

/** getLog function to get Log by id. */
exports.get = function (req, res) {
   
     Log.find({_id: req.params.id}, function(err, db) {
            if (err)
                res.send(err);
            res.json(db);
        });
};

/** updateLog function to get Log by id. */
exports.update = function (req, res) {
   // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
Log.findOneAndUpdate(req.params._id, req.body, function (err, db) {  
    // Handle any possible Log errors
      if (err)
                res.send(err);
            res.json(db);
   
});
}

/** removeLog function to get Log by id. */
exports.delete = function (req, res) {
    Log.findOneAndRemove({name: req.params.name}, function(err, result) {
    
    res.send(result);  
  });
}


  