//var express = require("express");
var db = require("../models");
//var router = express.Router();

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            // var hbsObject = {
            //     burgers: dbPost
            // };
            // res.render("index", { burgers });
            return res.render('index', { burgers })
            console.log(burgers.id);
        });
    });

    app.post("/api/burger/:name", function(req, res) {
        var val = req.params.name;
        // console.log("el body es " + req.body.name);
        db.Burger.create({
            burger_name: val,
        }).then(function(dbPost) {
            // We have access to the new todo as an argument inside of the callback function
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

}