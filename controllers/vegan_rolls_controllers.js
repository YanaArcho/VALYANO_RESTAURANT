'use strict';

let express = require("express");
let router = express.Router();
let vegan_roll = require("../models/vegan_roll.js");

router.get("/", (req, res) => {
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
  
  // Export routes for server.js to use.
  module.exports = router;