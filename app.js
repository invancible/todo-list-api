const express = require('express');
const morgan = require('morgan');

const todosRouter = require('./routes/todoRoutes');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/todos', todosRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`No route for ${req.originalUrl} in this server.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
