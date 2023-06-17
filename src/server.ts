import express from 'express';
import path from 'path';
import checkoutRouter from './routes/checkout';
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Static file middleware
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', checkoutRouter);
app.use('/checkout', checkoutRouter);
app.use('/order', checkoutRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});