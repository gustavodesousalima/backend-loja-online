const express = require('express');
const app = express();
const cors = require('cors'); // Importe o módulo CORS

require('dotenv').config();
require('./db');

const port = process.env.PORT || 3000;

const pictureRouter = require('./routes/pictureRoute');

// Configure o CORS no nível do aplicativo
app.use(cors());

app.use('/pictures', pictureRouter);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
