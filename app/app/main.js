const Extensions = require("./extension");
const Utils = require("./utils");

module.exports = class Main extends Utils {
  listPath = [];
  path = "./";
  ex = [];
  total = 0;
  groupped = [];
  unique = [];
  static instance = () => new Main();
  setPath(path = "./") {
    this.path = path;
  }
  getPaths() {
    this.listPath = this.load(this.path);
  }
  getExtentions(path, full = false) {
    let ex = [];
    this.listPath.forEach((a) => {
      let b = full ? path : path + "/" + a;
      try {
        if (!this.isDirectory(b)) {
          let f = this.ex.find(
            (e) => e.name == this.getExp(b)[0] && e.ex == this.getExp(b)[1]
          );

          if (!f) {
            this.ex.push(Extensions.get(...this.getExp(b)));
          }
        } else {
          if (this.unique.indexOf(b) == -1) {
            this.load(b).forEach((nw) => {
              this.getExtentions(b + "/" + nw, (full = true));
            });
          }
        }
      } catch (error) {
        console.log("error", error.message);
      }
      let result = ex;
      //   this.ex.push(...result);
    });
  }
  group() {
    let grouped = this.groupBy(
      this.ex.map((e) => e.toObj()),
      "extentionName"
    );
    this.total = this.ex.length;

    for (const key in grouped) {
      grouped[key] = (grouped[key].length / this.total) * 100;
    }
    for (const key in grouped) {
      this.groupped.push(Extensions.get(key, grouped[key]));
    }

    console.log(this.groupped.map((e) => e.toObj()));
  }
  setup() {
    this.getPaths();
    this.getExtentions(this.path);
    this.group();
    // group by
  }
};
