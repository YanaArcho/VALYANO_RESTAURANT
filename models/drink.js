'use strict';

let orm = require("../config/orm.js");

let drink = {
  all: (cb) => {
    orm.all("drinks", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("drinks", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("drinks", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("drinks", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = drink;