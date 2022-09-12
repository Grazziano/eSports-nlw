import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.send('Acessou a rota ads');
});

app.listen(3333);
