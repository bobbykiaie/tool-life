
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const productLineRoute = require('./routes/productLine-route');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use(('/'), productLineRoute)


// app.use(express.static('/public'));

// app.use((req, res, next) =>  {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

// mongoose.connect("mongodb://localhost:27017/toolDB", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://admin-bobby:r38GOGX1o13jtABP@cluster0.avhha.mongodb.net/toolDB?retryWrites=true&w=majority", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Successfully connected to MongoDB");
  
})


let port = process.env.PORT;

app.listen(port || 3200);
