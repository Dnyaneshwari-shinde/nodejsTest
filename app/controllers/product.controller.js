const db = require("../config/db.config");
const product = db.product;
const category = db.category;


const generateUniqueId = require('generate-unique-id');


exports.addProduct = async (req, res) => {
  if (!req.body.productname) {
    res.json({ status: 400, message: "Product name is missing." });
  }
  if (!req.body.description) {
    res.json({ status: 400, message: "Description is missing." });
  }
  if (!req.body.price) {
    res.json({ status: 400, message: "Price is missing." });
  }
  if (!req.body.weight) {
    res.json({ status: 400, message: "Weigth is missing." });
  }
  if (!req.body.categoryname) {
    res.json({ status: 400, message: "Category name is missing." });
  }
  else {
    var cat = await category.findOne({ where: { categoryname: req.body.categoryname } });
    console.log(cat.categoryId);
    try {
      const id = generateUniqueId({
        length: 5,
        useLetters: false
      });
      product.create({
        productId: id,
        productname: req.body.productname,
        description: req.body.description,
        price: req.body.price,
        weight: req.body.weight,
        status: true,
        categoryId: cat.categoryId
      }).then(pro => {
        res.json({
          status: 200,
          message: "Product is added",
          product: pro
        })
      })
    }
    catch (e) {
      console.log(e);
    }
  }
};

exports.getProducts = async (req, res) => {
  product.findAll({}).then(data => {
    res.json({
      status: 200,
      message: "Products list",
      product: data
    })
  })
}

exports.removeProduct = async (req, res) => {
  if (!req.body.product_id) {
    res.json({ status: 400, message: "Product Id is missing." });
  }
  else {
    product.destroy({ where: { productId: req.body.product_id } }).then(pro => {
      if (pro == 0) {
        res.json({ status: 400, message: "Invaild product id." });
      }
      else {
        res.json({
          status: 200,
          message: "Remove product",
          product: product
        })
      }
    })
  }
}


exports.updateProduct = async (req, res) => {
  if (!req.body.product_id) {
    res.json({ status: 400, message: "Product Id is missing." });
  }
  else {
    product.update({
      productname: req.body.productname,
      description: req.body.description,
      price: req.body.price,
      weight: req.body.weight,
      status: req.body.status
    }, { where: { productId: req.body.product_id } }).then(pro => {
      if (pro == 0) {
        res.json({ status: 400, message: "Invaild product id." });
      }
      else {
        res.json({
          status: 200,
          message: "Update product",
          queryStatus: pro
        })
      }
    }).catch(e => {
      res.json({ status: 400, message: e });
    })
  }
}

exports.getProductList = async (req, res) => {
  var record = (req.params.pageno * 10) - 9
  console.log(record);
  await db.sequelize.query(`SELECT products.product_id, categories.category_id, products.productname, categories.categoryname FROM products INNER JOIN categories ON products.category_id = categories.category_id LIMIT ${record}, 10;`).then(data => {
    res.json({
      status: 200,
      message: "Product list",
      product: data[0]
    })
  })
}

