//Require
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Options
app.use(express.json())

//Middlewares
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

//Routes
app.get('/', (req, res) => {
  res.redirect('/mathematicshighschool/en/');
});

app.use('/mathematicshighschool/en', require('./Routes/Routes'));

app.use((req, res) => {
  res.status(404).send('Not Found');
});

//Connecting to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //Listening to requests
    app.listen(process.env.PORT, () => {
      console.log("Successfully connected to database");
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } )
  .catch((err) => {
    console.log(err);
  });