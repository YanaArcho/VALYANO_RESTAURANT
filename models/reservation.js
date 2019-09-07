'use strict';

let orm = require("../config/orm.js");

let reservation = {
  all: (cb) => {
    orm.all("reservations", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("reservations", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("reservations", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("reservations", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = reservation;