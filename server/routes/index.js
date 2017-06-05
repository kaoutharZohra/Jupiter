var express = require('express');
var router = express.Router();
var  routerRessources = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlRessource = require('../controllers/ressourcesCtrl');
// profile
router.get('/users/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/users/register', ctrlAuth.register);
router.post('/users/login', ctrlAuth.login);

 routerRessources.get('/ressources/databases',ctrlRessource.getAll);
routerRessources.get('/', function (req, res) {
   
       console.log('jeloooooooooo');
            return res.json(result);   
   });
 
/* GET SINGLE DataBase BY ID */
routerRessources.get('/ressources/databases/:name', ctrlRessource.get);
 
/* SAVE DataBase */
routerRessources.post('/ressources/databases/', ctrlRessource.create);

/* UPDATE DataBase */
routerRessources.put('/ressources/databases/:name', ctrlRessource.update);
 

/* DELETE DataBase */
routerRessources.delete('/ressources/databases/:name', ctrlRessource.delete);
 
// API Server Endpoints 
module.exports = {
    protected: router,
    unprotected: routerRessources
};
//module.exports = router;