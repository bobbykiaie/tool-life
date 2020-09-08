const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const DataSchema = {
  quantity: [Number],
  rotated: [String],
  reason: [String]
}

const ToolSchema = {
  name: String,
  image: String,
  data: [DataSchema]
}
const HistorySchema = {
  tool: String,
  quantity: Number,
  rotated: String,
  reason: String
}

const ProgramSchema = {
  name: String,
  tools: [ToolSchema],
  history: [HistorySchema]
}

const ComponentSchema = {
    name: String,
    materialNumber: Number,
    programs: [ProgramSchema]
};


const productSchema = new Schema({
    name: String,
    components: [ComponentSchema]
});



module.exports = mongoose.model('Product', productSchema);
