const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title field is required.'],
    },
    description: {
      type: String,
      trim: true,
      maxLength: 250,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'completed'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
