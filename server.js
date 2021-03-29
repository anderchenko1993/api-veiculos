const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/db_veiculos', 
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