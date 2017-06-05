
var mongoose = require('mongoose');
var DataBase = require('../models/ressource').DataBase;
//mongoose.Promise = global.Promise;

/** create function to create DataBase. */
exports.create = function (req, res) {
        console.log('1 2 3 4 5');
    
   // new Thread({title: req.body.title, author: req.body.author}).save();
DataBase =new DataBase({name:req.body.name,
    modality: req.body.modality,sensor: req.body.sensor, 
    resolution: req.body.resolution, numberTot: req.body.numberTot,
     numberScans: req.body.numberScans });
/*DataBase.save().exec()
    .then(function(xxx) {
                        console.log('grrrrr1');

      if (xxx == null) return next(); // Not found
                      console.log('grrrrr2');

       return res.json({
  status: 'OK',
  result: req.body
});
    })
    .then(null, function(err) {
                console.log('grrrrr');

      return next(err);
    });
 */
    DataBase.save( function(err, result) {
        if (!err) {
         console.log('ey eyey e2');
       
            return res.json(result);
        } else {
                    console.log('ey eyey e3');

            return res.send(err); // 500 error
        }
    });
};

/** getDataBase function to get DataBase by id. */
exports.getAll = function (req, res) {
   

    DataBase.find({}, function(err, dbs) {
    var dbMap = {};

    dbs.forEach(function(db) {
      dbMap[db._id] = db;
    });

    res.send(dbMap);  
  });
};

/** getDataBase function to get DataBase by id. */
exports.get = function (req, res) {
   
     DataBase.find({name: req.params.name}, function(err, db) {
            if (err)
                res.send(err);
            res.json(db);
        });
};

/** updateDataBase function to get DataBase by id. */
exports.update = function (req, res) {
   // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.dbId.
// Find the existing resource by ID
DataBase.findOneAndUpdate(req.params.name, req.body, function (err, db) {  
    // Handle any possible database errors
      if (err)
                res.send(err);
            res.json(db);
   /* if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        db.name = req.body.name || db.name;
        db.resolution = req.body.resolution || db.resolution;
        db.sensor = req.body.sensor || db.sensor;
        db.numberScans = req.body.numberScans || db.numberScans;
        db.modality = req.body.modality || db.modality;
        db.numberTot = req.body.numberTot || db.numberTot;

        // Save the updated document back to the database
        db.save(function (err, db) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(db);
        });
               res.send(db);

    }*/
});
}

/** removeDataBase function to get DataBase by id. */
exports.delete = function (req, res) {
    DataBase.findOneAndRemove({name: req.params.name}, function(err, result) {
    
    res.send(result);  
  });
}


  