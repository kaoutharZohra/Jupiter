var express = require('express');
 var  routerCategories = express.Router();
 
var ctrlCategories = require('../controllers/categoriesCtrl');
 
 routerCategories.get('/Categories',ctrlCategories.getAll);
routerCategories.get('/', function (req, res) {
   
       console.log('jeloooooooooo');
            return res.json(result);   
   });
 
/* GET SINGLE DataBase BY ID */
routerCategories.get('/Categories/:name', ctrlCategories.get);
 
/* SAVE DataBase */
routerCategories.post('/Categories/', ctrlCategories.create);

/* UPDATE DataBase */
routerCategories.put('/Categories/:name', ctrlCategories.update);
 

/* DELETE DataBase */
routerCategories.delete('/Categories/:name', ctrlCategories.delete);
 
 
 module.exports = routerCategories;