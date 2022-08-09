module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product",
        {
            Id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            productId: {
                type: Sequelize.INTEGER,
                unique: true
            },

            productname: {
                type: Sequelize.STRING,
                allowNull: false
            },

            description: {
                type: Sequelize.STRING,
                allowNull: false
            },

            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },

            weight: {
                type: Sequelize.FLOAT,
                allowNull: false
            },

            status: {
                type: Sequelize.BOOLEAN,
            },

            cat_id: {
                type: Sequelize.INTEGER,
            },
        })
    return product;
}