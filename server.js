require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('DB OK!');
    app.listen(process.env.PORT);
  })
  .catch(() => {
    console.log('DB ERROR!');
  });
