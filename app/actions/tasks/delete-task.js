import mongoose from 'mongoose';
import TaskSchema from '../../entities/task';

const Task = mongoose.model('Task', TaskSchema);

const deleteTask = (req, res) => {
  Task.findByIdAndRemove({ _id: req.params.taskId }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

export default deleteTask;
