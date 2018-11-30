import addNewTask from '../actions/tasks/new-task';
import getTasks from '../actions/tasks/get-tasks';
import getTask from '../actions/tasks/get-task';
import updateTask from '../actions/tasks/update-task';
import deleteTask from '../actions/tasks/delete-task';

const taskRoutes = (app) => {
  app.route('/tasks')
    .get(getTasks)
    .post(addNewTask);

  app.route('/tasks/:taskId')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);
};

export default taskRoutes;
