const express = require('express');

// ...

const app = express();

app.use(express.json());

const { LoginRoutes, UserRoutes } = require('./routes');

app.use('/login', LoginRoutes);

app.use('/user', UserRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
