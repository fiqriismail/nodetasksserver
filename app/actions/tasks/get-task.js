import mongoose from 'mongoose';
import TaskSchema from '../../entities/task';

const Task = mongoose.model('Task', TaskSchema);

const getTask = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

export default getTask;
