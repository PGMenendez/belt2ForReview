// console.log("routes.js");
const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api/pirates', PirateController.findAll);
    app.post('/api/pirates', PirateController.create);
    app.get('/api/pirates/:id', PirateController.findOne);
    app.put('/api/pirates/:id', PirateController.update);
    app.delete('/api/pirates/:pirate_id', PirateController.delete);
}