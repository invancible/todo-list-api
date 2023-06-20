const express = require('express');
const morgan = require('morgan');

const todosRouter = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/todos', todosRouter);

module.exports = app;
