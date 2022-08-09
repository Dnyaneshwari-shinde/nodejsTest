module.exports = function (app) {


  const product = require("../controllers/product.controller");
  app.post("/api/addProduct", product.addProduct);
  app.get("/api/getProducts", product.getProducts);
  app.delete("/api/removeProduct", product.removeProduct);
  app.put("/api/updateProduct", product.updateProduct);
  app.get("/api/getProductList/:pageno", product.getProductList);

  const category = require("../controllers/category.controller");
  app.post("/api/addCategory", category.addCategory);
  app.get("/api/getCategorys", category.getCategorys);
  app.delete("/api/removeCategory", category.removeCategory);
  app.put("/api/updateCategory", category.updateCategory);
  app.get("/api/getCat", category.getCat);
};
