const fs = require("fs");
module.exports = class Utils {
  load = fs.readdirSync;
  isDirectory = (path = ".") => fs.lstatSync(path).isDirectory();

  getExp(file = "") {
    let a = file.split("/");
    let f = a[a.length - 1];
    return f.split(".");
  }

  groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
};
