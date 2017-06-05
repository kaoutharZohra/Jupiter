var express = require('express');
 var  routerMethods = express.Router();
 
var ctrlMethods = require('../controllers/methodsCtrl');
 
 routerMethods.get('/Methods',ctrlMethods.getAll);

/* GET SINGLE DataBase BY ID */
routerMethods.get('/Methods/:name', ctrlMethods.get);
 
/* SAVE DataBase */
routerMethods.post('/Methods/', ctrlMethods.create);

/* UPDATE DataBase */
routerMethods.put('/Methods/:name', ctrlMethods.update);
 

/* DELETE DataBase */
routerMethods.delete('/Methods/:name', ctrlMethods.delete);
 
 
 module.exports = routerMethods;