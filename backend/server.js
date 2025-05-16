const express = require('express');
const cors = require('cors');
const connectDB = require('./db/index');
const app = express();

// db connection
connectDB();

app.use(cors());
app.use(express.json());

const routes = require('./routes');

app.use('/api', routes);
app.use('*', (req, res) => {
  return res.status(404).json({ message: 'page Not Found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('app is running');
});
