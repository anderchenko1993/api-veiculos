const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const mongoose = require('mongoose');
const apiErrorHandler = require('./src/error/api-error-handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(apiErrorHandler);

mongoose.connect('mongodb+srv://mongo_user:2DW1YO03oXf4VCC1@cluster0.yfarq.mongodb.net/db_veiculos', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});