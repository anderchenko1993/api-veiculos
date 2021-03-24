const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});