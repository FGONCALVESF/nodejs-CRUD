const express = require('express');
const router = express.Router(); //utiliser express comme un middleware (enlever dans le fichier de base les routes)
const controllers = require('../controllers/employeController'); //recupere les différents controllers
// Etape 3 - Creation d'une route par défaut // 
router
    .route('/') //factorisation de la route, permet de greffer une autre methode dans la route (methode = "get" ou "post" etc..//
    .get(controllers.getAllEmployes); //utilisation du callback (controller) de la methode get

router
    .route('/ajouter')
    .get(controllers.formAjouter)
    .post(controllers.addEmploye); // "" "" "" de la methode post

router 
    .route('/modifier/:id')
    .get(controllers.formModifier)
    .put(controllers.updateEmploye); 

router 
    .route('/supprimer/:id')
    .delete(controllers.removeEmploye);

module.exports = router;  
