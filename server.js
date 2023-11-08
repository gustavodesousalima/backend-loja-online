const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path'); // Importe o módulo path

require('dotenv').config();
require('./db');

const port = process.env.PORT || 3000;

const pictureRouter = require('./routes/pictureRoute');

app.use(express.static(path.join(__dirname, 'uploads'))); // Utilize o módulo path para manipulação de caminhos

// Configure o CORS no nível do aplicativo
app.use(cors());

app.use('/pictures', pictureRouter);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
