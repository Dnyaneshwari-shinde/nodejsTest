const db = require("../config/db.config");
const category = db.category;


const generateUniqueId = require('generate-unique-id');


exports.addCategory = async (req, res) => {
    if (!req.body.categoryname) {
        res.json({ status: 400, message: "Category name is missing." });
    }
    if (!req.body.subcategory) {
        res.json({ status: 400, message: "Sub category is missing." });
    }
    else {
        const id = generateUniqueId({
            length: 5,
            useLetters: false
        });
        category.create({
            categoryId: id,
            categoryname: req.body.categoryname,
            subcategory: req.body.subcategory,
            status: true
        }).then(cat => {
            res.json({
                status: 200,
                message: "Category is added",
                category: cat
            })
        })
    }
};

exports.getCategorys = async (req, res) => {
    category.findAll({}).then(data => {
        res.json({
            status: 200,
            message: "Category list",
            category: data
        })
    })
}

exports.removeCategory = async (req, res) => {
    if (!req.body.category_id) {
        res.json({ status: 400, message: "Category Id is missing." });
    }
    else {
        category.destroy({ where: { categoryId: req.body.category_id } }).then(cat => {
            if (cat == 0) {
                res.json({ status: 400, message: "Invaild category id." });
            }
            else {
                res.json({
                    status: 200,
                    message: "Remove category",
                    category: cat
                })
            }
        })
    }
}


exports.updateCategory = async (req, res) => {
    if (!req.body.category_id) {
        res.json({ status: 400, message: "Category Id is missing." });
    }
    else {
        category.update({
            categoryname: req.body.categoryname,
            subcategory: req.body.subcategory
        }, { where: { categoryId: req.body.category_id } }).then(cat => {
            if (cat == 0) {
                res.json({ status: 400, message: "Invaild product id." });
            }
            else {
                res.json({
                    status: 200,
                    message: "Update category",
                    category: cat
                })
            }
        }).catch(e => {
            res.json({ status: 400, message: e });
        })
    }
}



exports.getCat = async (req, res) => {
    category.findAll({ attributes: ['categoryname'] }).then(catname => {
        res.json({
            status: 200,
            category: catname
        })
    })
}