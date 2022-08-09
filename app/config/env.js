

const env = {
    host: "0.0.0.0",
    username: "root",
    password: "",
    database: "nodejstest",
    dialect: "mysql",

    pool:
    {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = env;

