const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products
app.get("/api/v1/products", (req, res)=>{
    if(products && products.length){
        res.statusCode = 200;

        const payload = {
            status: "success", 
            message: "Product fetched successfully",
            data: {
                products,
            },
        };
        res.json(payload)
    }else{
        res.statusCode = 400
        const payload = {message: "Product not found"}
        res.json(payload)
    }
})


module.exports = app;
