import express from 'express';
import path from 'path';
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Static file middleware
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});