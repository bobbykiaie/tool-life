const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/toolDB", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Successfully connected to MongoDB");
})

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

const Product = mongoose.model("product", ProductSchema);



app.get("/", function(req, res){
    res.render("home")
});


app.get("/home", function(req, res){
      res.render("home")
  });

  app.get("/data", function(req, res){
        res.render("data")
    });


app.get("/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


app.listen(4000, function() {
  console.log("Server started on port 3000");
});
