const Employe = require("../models/employeModel");

exports.getAllEmployes = async (req, res) => {

    const employes = await Employe.find();

    // Création de la réponse en format json //
    res.render('employes', {
        titrePage: "LE TITRE",
        listeEmployes: employes,
        urlModifier: '/modifier',
        urlSupprimer: '/supprimer'
    })
}

exports.formAjouter = (req, res) => {
    res.render('ajouter');
}

exports.addEmploye = async (req, res) => {
    let employe = new Employe(req.body);
    await employe.save();

    res.redirect('/');
}

exports.formModifier = async (req, res) => {
    const employe = await Employe.findOne({ _id: req.params.id });
    res.render('modifier', {
        data: employe,
        titre: "Page de modification"
    });
}

exports.updateEmploye = async (req, res) => {
    await Employe.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
}

exports.removeEmploye = async (req, res) => {
    await Employe.findByIdAndDelete(req.params.id);
    res.redirect('/');
}