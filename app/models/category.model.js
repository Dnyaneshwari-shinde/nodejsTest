module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("category",
        {
            Id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            categoryId: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },

            categoryname: {
                type: Sequelize.STRING,
                allowNull: false
            },

            subcategory: {
                type: Sequelize.STRING,
                allowNull: false
            },

            status: {
                type: Sequelize.BOOLEAN,
            }

        })
    return category;
}