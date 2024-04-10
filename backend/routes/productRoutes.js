import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js'
// import products from "../data/products.js";



router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }));
  
  router.get("/:id", asyncHandler(async (req, res) => {
    // const product = products.find((item) => item._id === req.params.id);
    const product = await Product.findById(req.params.id);

    if (product){
       return  res.json(product);
    }

    res.status(404).json({message:"Producto no encontrado"})

  }));

export default router;
