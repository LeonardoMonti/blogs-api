const express = require('express');

// ...

const app = express();

app.use(express.json());

const { LoginRoutes, UserRoutes, CategoryRoutes } = require('./routes');

app.use('/login', LoginRoutes);

app.use('/user', UserRoutes);

app.use('/categories', CategoryRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
