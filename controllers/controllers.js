'use strict';

let express = require("express");
let router = express.Router();
let drink = require("../models/drink.js");
let burger = require("../models/burger.js");
let soup = require("../models/soup.js");
let salad = require("../models/salad.js");
let vegan_roll = require("../models/vegan_roll.js");
let reservation = require("../models/reservation.js");
let contact = require("../models/contact.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: {},
            drinks: {},
            soups: {},
            salads: {},
            vegan_rolls: {},
        };
        hbsObject.burgers = data;
        drink.all((data) => {
            hbsObject.drinks = data;
            soup.all((data) => {
                hbsObject.soups = data;
                salad.all((data) => {
                    hbsObject.salads = data;
                    vegan_roll.all((data) => {
                        hbsObject.vegan_rolls = data
                        console.log(hbsObject)
                        res.render("index", hbsObject);
                    })
                })})})
            })
});
  
router.post("/api/reservations", (req, res) => {
  reservation.create([
    "fullname", "email", "phone", "people", "date", "about"
  ], [
    req.body.fullname, req.body.email, req.body.phone, req.body.people, req.body.date, req.body.about
  ], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/contacts", (req, res) => {
  contact.create([
    "name", "email", "subject", "message"
  ], [
    req.body.name, req.body.email, req.body.subject, req.body.message
  ], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//burgers
  router.post("/api/burgers", (req, res) => {
    burger.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      eaten: req.body.eaten
    }, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    burger.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  //drinks
  router.get("/api/drinks", (req, res) => {
    drink.all((data) => {
      let hbsObject = {
        drinks: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  

  router.post("/api/drinks", (req, res) => {
    drink.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/drinks/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    drink.update({
      eaten: req.body.eaten
    }, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/drinks/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    drink.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  //salads
  router.get("/api/salads", (req, res) => {
    salad.all((data) => {
      let hbsObject = {
        salads: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  

  router.post("/api/salads", (req, res) => {
    salad.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/salads/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    salad.update({
      eaten: req.body.eaten
    }, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/salads/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    salad.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  //soups
  router.get("/api/soups", (req, res) => {
    soup.all((data) => {
      let hbsObject = {
        soups: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  

  router.post("/api/soups", (req, res) => {
    soup.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/soups/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    soup.update({
      eaten: req.body.eaten
    }, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/soups/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    soup.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  //vegan_rolls
  router.get("/api/vegan_rolls", (req, res) => {
    vegan_roll.all((data) => {
      let hbsObject = {
        vegan_rolls: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  

  router.post("/api/vegan_rolls", (req, res) => {
    vegan_roll.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/vegan_rolls/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    vegan_roll.update({
      eaten: req.body.eaten
    }, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/vegan_rolls/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    vegan_roll.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
