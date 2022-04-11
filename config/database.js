const mongoose = require('mongoose');

exports.connexionMongo = (async function(){
   await mongoose.connect('mongodb+srv://fabiengf:p70FQfO2nulM8MEa@cluster0.932hz.mongodb.net/employes_db?retryWrites=true&w=majority')
    .then( () => { 
        console.log('Connexion OK');
    })
    .catch( (error) => {
        console.error('Connexion not OK', error.message);
    });
})();
  