const Product = require("../models/product");
const HttpError = require("../models/http-error");

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

const getComponents = async (req, res, next) => {
  const productId = req.params.pid;
  let components;
  try {
    components = await Product.find({ name: productId });
  } catch (err) {
    const error = new HttpError(
      "Fetching components failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    components: components.map((component) =>
      component.toObject({ getters: true })
    ),
  });
};

const getOperations = async (req, res, next) => {
  const productId = req.params.pid;
  const componentId = req.params.cid;

  let product;
  let selectedComponent;
  let operations;
  try {
    product = await Product.find({ name: productId });
    components = await product[0].components;
    selectedComponent = await components.find(
      (component) => component.name === componentId
    );
    operations = await selectedComponent;
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({ operations });
  // res.json({ components: components.map(component => component.toObject({ getters: true })) });
};
const getTools = async (req, res, next) => {
  const productId = req.params.pid;
  const componentId = req.params.cid;
  const operationId = req.params.oid;

  let product;
  let selectedComponent;
  let operations;
  let operation;
  try {
    product = await Product.find({ name: productId });
    components = await product[0].components;
    selectedComponent = await components.find(
      (component) => component.name === componentId
    );
    operations = await selectedComponent;
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ operations });
  // res.json({ components: components.map(component => component.toObject({ getters: true })) });
};

const postHandler = async (req, res, next) => {
  const productId = req.params.pid;
  const componentId = req.params.cid;
  const operationId = req.params.oid;
  // console.log("this is the operation:" + operationId + "from the " + componentId + "of the product: " + productId);
  const { tool, quantity, rotated, reason } = req.body;
  
  let searched;
  let filteredComponent;
  let filteredOperation;
  let changedTool;
  try {
    searched = await Product.find({ name: productId });
    console.log("About to show searched")
    console.log(searched);

  

    await Product.updateOne(
      { name: productId },
      {
        $push: {
          "components.$[comp].programs.$[op].tools.$[t].data.0.quantity": quantity,
        },
      },
      {
        arrayFilters: [
          { "comp.name": componentId },
          { "op.name": operationId },
          { "t.name": tool },
        ],
      }
    );
    console.log("I got to Quantity");
    await Product.updateOne(
      { name: productId },
      {
        $push: {
          "components.$[comp].programs.$[op].tools.$[t].data.0.rotated": rotated,
        },
      },
      {
        arrayFilters: [
          { "comp.name": componentId },
          { "op.name": operationId },
          { "t.name": tool },
        ],
      }
    );
    await Product.updateOne(
      { name: productId },
      {
        $push: {
          "components.$[comp].programs.$[op].tools.$[t].data.0.reason": reason,
        },
      },
      {
        arrayFilters: [
          { "comp.name": componentId },
          { "op.name": operationId },
          { "t.name": tool },
        ],
      }
    );
    await Product.updateOne(
      { name: productId },
      {
        $push: {
          "components.$[comp].programs.$[op].history": {tool: tool, quantity: quantity, rotated: rotated, reason: reason},
        }
      },
      {
        arrayFilters: [
          { "comp.name": componentId },
          { "op.name": operationId },
        ],
      }
    );
   res.json({
     status: 200,
     message: "arrrrrrrreehhh"
   })
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
};

const getData = async (req, res, next) => {
  const productId = req.params.pid;
  const componentId = req.params.cid;
  const operationId = req.params.oid;

  let theData;

  try {
        theData = await Product.find({name: productId});
        console.log("About to show data: ")
        console.log(theData);
  }
  catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(theData);
}

exports.getProducts = getProducts;
exports.getComponents = getComponents;
exports.getOperations = getOperations;
exports.getTools = getTools;
exports.postHandler = postHandler;
exports.getData = getData;
