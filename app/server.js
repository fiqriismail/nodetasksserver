import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks-route';

const app = express();
const PORT = 3000;

// MongoDB conection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tasksdb', {
  useNewUrlParser: true,
});

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mount the routes
taskRoutes(app);


app.get('/', (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`You server is running on port ${PORT}`));
