// console.log("controller.js");
const Pirate = require('../models/pirate.model');

module.exports = {
    findAll: (req, res) => {
        Pirate.find().sort('name')
        .then((allPirates) => res.json(allPirates))
        .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
    findOne: (req, res) => {
        Pirate.findById(req.params.id)
        .then((Pirate) => res.json(Pirate))
        .catch((err) => res.json({message: "An error has happened in find one.", error: err}));
    },
    create: (req, res) => {
        console.log(req.body);
        Pirate.create(req.body)
        .then((newPirate) => res.json(newPirate))
        .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
    update: (req, res) => {
        Pirate.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedPirate) => res.json(updatedPirate))
        .catch((err) => res.json({message: "An error has happened in update.", error: err}));
    },
    delete: (req, res) => {
        console.log(req.params.pirate_id);
        Pirate.findByIdAndDelete(req.params.pirate_id)
        .then((successMsg) => res.json(successMsg))
        .catch((err) => res.json({message: "An error has happened.", error: err}));
    },
}