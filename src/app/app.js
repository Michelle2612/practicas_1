const express = require('express');
const app = express();
const port = 3000;


const cors = require('cors');

app.use(cors());
app.get('/api/data', (req, res) => {
  const data = { message: 'Hola desde la API' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});