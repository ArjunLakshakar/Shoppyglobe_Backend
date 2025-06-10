import { addUser, getUser } from "../Controller/UserController.js";
import { getProduct, getSingleProduct } from "../Controller/ProductController.js";
import { addToCart, updateCart, removeFromCart, getCartItems, clearCart } from "../Controller/CartController.js";
import { auth } from "./auth.js";
import express from "express";

export function routes(app) {

  // User
  app.post("/register", addUser);
  app.post("/login", getUser);

  // Products
  app.get("/products", getProduct);
  app.get("/product/:id", getSingleProduct);

  // Cart (protected)
  app.post("/cart", auth, addToCart);
  app.get("/getCartItems", auth, getCartItems);
  app.put("/updateQuantity/:productId", auth, updateCart);
  app.delete("/removeCartItem/:productId", auth, removeFromCart);
  app.delete('/clearCart', auth, clearCart);

}
