'use strict';

let orm = require("../config/orm.js");

let table = {
  all: (cb) => {
    orm.all("tables", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("tables", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("tables", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("tables", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = table;