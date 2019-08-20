'use strict';

let orm = require("../config/orm.js");

let soup = {
  all: (cb) => {
    orm.all("soups", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
      orm.create("soups", cols, vals, (res) => {
        cb(res);
      });
  },
  update: (objColVals, condition, cb) => {
    orm.update("soups", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("soups", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = soup;