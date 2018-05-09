//var express = require("express");
var db = require("../models");
//var router = express.Router();

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            return res.render('index', { burgers })
        });
    });

    app.post("/api/burger/:name", function(req, res) {
        var val = req.params.name;

        db.Burger.create({
            burger_name: val,
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.put("/api/burger/:id", function(req, res) {
        var idP = req.params.id;

        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: idP
            }
        }).then(function(result) {

            res.json(result);
        });
    });

    app.delete("/api/burger/", function(req, res) {
        db.Burger.destroy({
            where: {
                devoured: 1
            }
        }).then(function(result) {
            res.json(result);
        });
    });

}