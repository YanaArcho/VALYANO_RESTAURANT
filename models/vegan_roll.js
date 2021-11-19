'use strict';

let orm = require("../config/orm.js");

let vegan_roll = {
  all: (cb) => {
    orm.all("vegan_rolls", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("vegan_rolls", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("vegan_rolls", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("vegan_rolls", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = vegan_roll;