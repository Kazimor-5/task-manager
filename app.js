const express = require('express');
const app = express();

const tasks = require('./routes/tasks');

app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
