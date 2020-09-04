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
  console.log(productId);
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
  console.log(operationId);
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
  console.log(tool + quantity + rotated + reason);
  let searched;
  let filteredComponent;
  let filteredOperation;
  let changedTool;
  try {
    searched = await Product.find({ name: productId });
    filteredComponent = await searched[0].components.filter(
      (component) => component.name === componentId
    );
    filteredOperation = await filteredComponent[0].programs.filter(
      (operation) => operation.name === operationId
    );
    // console.log("tool name is: " + tool);
    changedTool = await filteredOperation[0].tools.filter(
      (name) => name.name === tool
    );


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
