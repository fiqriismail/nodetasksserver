import mongoose from 'mongoose';

const schema = mongoose.Schema;

const TaskSchema = schema({
  title: {
    type: String,
    required: 'Enter a title',
  },
  description: {
    type: String,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default TaskSchema;
