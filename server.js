const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

require('dotenv').config();
require('./db');

const port = process.env.PORT || 3000;

const pictureRouter = require('./routes/pictureRoute');

app.use(express.static(path.join(__dirname, 'uploads'))); 

app.use(cors());

app.use('/pictures', pictureRouter);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
