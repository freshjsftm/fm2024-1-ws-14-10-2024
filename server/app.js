const express = require('express');
const cors = require('cors');
const { createOrFindUser } = require('./controllers/user.controller');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi!');
});

app.post('/users', createOrFindUser);

app.use((err, req, res) => {
  console.log('---->>', err);
  res.status(500).send({ errors: [{ detail: err.message }] });
});

module.exports = app;
