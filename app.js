// Etape 1 - Importation d'express sur la feuille app.js //
const express = require('express');

// Recuperation de Method Override //
const methodOverride = require('method-override');

//outil de debug//
const logger = require('morgan');

// utilisation du moteur de view twig dans express //
const twig = require('twig');

//recuperation de la connexion//
require('./config/database');

//Fais appel aux routes présent dans employeRouteur.js//
const employeRouteur = require('./routes/employeRouteur');

// Etape 2 - Création d'une instance du serveur //
const app = express();

//Method-Override pour simuler les methodes put et delete depuis un form//
app.use(methodOverride('_method'))

//Config du moteur de view twig//
app.set('views', './views');
app.set('view engine', 'twig');

//Middleware des logs//
app.use(logger('dev'));

// Permet à express de parser nos requetes en JSON //
app.use(express.json());
// Permet a Express de recuperer les infos du formulaire au format json // (vers la BDD Mongo)
app.use(express.urlencoded({extended:false}));

//Middleware du fichier employeRouteur.js//
app.use('/', employeRouteur);

// Etape 4 - Lancer le serveur 
app.listen(3500, () => {
    console.log('http://localhost:3500'); // lien du serveur qui s'affiche dans le terminal pour de facilité
});

