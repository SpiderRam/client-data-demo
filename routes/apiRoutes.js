const clients = require("../data/generated");

module.exports = function(app) {

    app.get('/clients', function(req,res) {
        res.json(clients);
    });

};