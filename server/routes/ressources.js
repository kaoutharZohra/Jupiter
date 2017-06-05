var express = require('express');
 var  routerRessources = express.Router();
 
var ctrlRessource = require('../controllers/ressourcesCtrl');
 
 routerRessources.get('/ressources/databases',ctrlRessource.getAll);

 
/* GET SINGLE DataBase BY ID */
routerRessources.get('/ressources/databases/:name', ctrlRessource.get);
 
/* SAVE DataBase */
routerRessources.post('/ressources/databases/', ctrlRessource.create);

/* UPDATE DataBase */
routerRessources.put('/ressources/databases/:name', ctrlRessource.update);
 

/* DELETE DataBase */
routerRessources.delete('/ressources/databases/:name', ctrlRessource.delete);
 
 
 module.exports = routerRessources;