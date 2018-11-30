import mongoose from 'mongoose';
import TaskSchema from '../../entities/task';

const Task = mongoose.model('Task', TaskSchema);

const addNewTask = (req, res) => {
  const newTask = new Task(req.body);

  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

export default addNewTask;
