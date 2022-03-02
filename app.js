const express = require('express');
const app = express();
const connectDB = require('./server/db/connect');
require('dotenv').config();
const errorHandlerMiddleware = require('./server/middleware/error-handler');

const tasks = require('./server/routes/tasks');

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, async () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
