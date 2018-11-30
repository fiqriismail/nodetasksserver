import mongoose from 'mongoose';
import TaskSchema from '../../entities/task';

const Task = mongoose.model('Task', TaskSchema);

const getTasks = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
};

export default getTasks;
