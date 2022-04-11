const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaEmploye = new Schema ({
    prenom: String,
    age: Number,
    email: String
  },{timestamps:true}); //met la date quand on insert un nouvel employe

  const Employe = mongoose.model('Employe', SchemaEmploye); 

  module.exports = Employe;     