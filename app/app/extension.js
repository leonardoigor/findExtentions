module.exports = class Extensions {
  name = "";
  ex = "";
  extentionName = "";
  constructor(name, ex) {
    this.ex = ex;
    this.name = name;
    this.valid();
  }

  static get(ex, name) {
    return new Extensions(ex, name);
  }
  setExN(t) {
    this.extentionName = t;
  }
  setexName(t) {
    this.ex = t;
  }
  valid() {
    if (!this.ex) this.setExN("Outros");
    else {
      switch (this.ex) {
        case "js":
          this.setExN("JavaScript");
          this.break;

        case "json":
          this.setExN(this.ex);
          this.break;
        default:
          try {
            if (!parseInt(this.ex)) {
              this.setExN(this.ex);
            } else {
              this.setExN(this.ex);
              this.setexName(this.name);
              this.name = this.extentionName;
              this.valid();
            }
          } catch (error) {}
          break;
      }
    }
  }

  toObj = () => JSON.parse(JSON.stringify(this));
};
