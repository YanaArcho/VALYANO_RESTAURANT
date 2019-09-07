'use strict';

let orm = require("../config/orm.js");

let contact = {
  all: (cb) => {
    orm.all("contacts", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("contacts", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("contacts", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("contacts", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = contact;