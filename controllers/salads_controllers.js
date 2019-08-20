'use strict';

let express = require("express");
let router = express.Router();
let salad = require("../models/salad.js");

router.get("/", (req, res) => {
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
  
  // Export routes for server.js to use.
  module.exports = router;