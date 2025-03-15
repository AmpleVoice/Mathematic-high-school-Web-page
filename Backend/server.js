//Require
require('dotenv').config();
const express = require('express');
const app = express();

//Listening to the requests
app.listen(process.env.PORT, () => {    
  console.log('Server is running on port', process.env.PORT);
});

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