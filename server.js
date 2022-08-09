const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "https://localhost:8090/");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  response.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  next();
});

require('./app/route/route')(app);

app.use(express.static('./app/views'))

const db = require("./app/config/db.config");
db.sequelize.sync({ force: false, alter: false }).then(() => {
  console.log("sync with database");
});

const port = process.env.port || 8090;
console.log("server is running", port);
app.listen(port);