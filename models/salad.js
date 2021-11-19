'use strict';

let orm = require("../config/orm.js");

let salad = {
  all: (cb) => {
    orm.all("salads", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("salads", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("salads", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("salads", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = salad;