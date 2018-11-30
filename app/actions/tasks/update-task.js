import mongoose from 'mongoose';
import TaskSchema from '../../entities/task';

const Task = mongoose.model('Task', TaskSchema);

const updateTask = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

export default updateTask;
