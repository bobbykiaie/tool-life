
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const productLineRoute = require('./routes/productLine-route');
const app = express();



app.use(('/'), productLineRoute)




mongoose.connect("mongodb://localhost:27017/toolDB", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Successfully connected to MongoDB");
  
})
console.log(mongoose.Document);

const DataSchema = {
  distance: Number,
  time: Number,
  quantity: Number
}

const ToolSchema = {
  toolNumber: Number,
  data: [DataSchema]
}

const ProgramSchema = {
  operation: Number,
  toolNumber: [ToolSchema]
}

const ComponentSchema = {
    name: String,
    materialNumber: Number,
    program: [ProgramSchema]
};

const ProductSchema = {
    name: String,
    components: [ComponentSchema]
};

const Products = mongoose.model("Product", ProductSchema);

// const product = new Products ({
//     name: "Lap fusion",
//     components: [{
//       name: "little Jaw",
//       materialNumber: 101474663
//     }]
// })



// app.get("/", function(req, res) {
//   res.render
//   console.log("hi");
//   const body = Products.find({name: "Lap fusion"}, function(err,foundItems){
//     console.log(foundItems);
//   })

// });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
