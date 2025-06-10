import Product from "../Model/ProductSchema.js";

// Fetch a list of products
export function getProduct(req, res) {
    Product.find()
        .then(products => {
            if (!products || products.length === 0) {
                return res.status(404).json({ message: "No products found" });
            }
            res.status(200).json({ message: "Products retrieved successfully", products });
        })
        .catch(err => res.status(500).json({ message: "Error retrieving products", error: err.message }));
}


// Fetch details of a single product
export function getSingleProduct(req, res) {
    const productId = req.params.id;
    Product.findById(productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product retrieved successfully", product });
        })
        .catch(err => res.status(500).json({ message: "Error retrieving product", error: err.message }));
}