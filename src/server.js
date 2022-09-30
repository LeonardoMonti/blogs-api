require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.json({ message: 'connect blog API' });
});

app.listen(port, () => console.log('ouvindo porta', port));
