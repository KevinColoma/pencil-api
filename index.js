require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const pencilRoutes = require('./routes/pencilRoutes');

const app = express();
app.use(express.json());

app.use('/api/pencils', pencilRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));