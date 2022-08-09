module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product",
        {
            Id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            productId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
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
            }

        })
    return product;
}