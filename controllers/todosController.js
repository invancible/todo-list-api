const Todo = require('../models/todo');

const catchAsync = require('../middleware/catchAsync');
const AppError = require('../utils/appError');
const ApiFeatures = require('../utils/apiFeatures');

exports.getAllTodos = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Todo.find(), req.query).paginate();
  const todos = await features.query;

  res.status(200).json({
    status: 'success',
    result: todos.length,
    data: {
      todos,
    },
  });
});

exports.getTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return next(new AppError(`No todo for ID: ${req.params.id}`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo,
    },
  });
});

exports.createTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      todo,
    },
  });
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return next(new AppError(`No todo for ID: ${req.params.id}`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo,
    },
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    return next(new AppError(`No todo for ID: ${req.params.id}`, 404));
  }

  res.status(204).json({
    status: 'success',
  });
});
