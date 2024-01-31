const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  console.log(cb)
  console.log("Fui executado");
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
      console.log("Parsed", JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      console.log("before", products);
      products.push(this);
      console.log("after", products);
      console.log("Stringify", JSON.stringify(products));
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
