import { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import OrdersList from "./components/orders/OrdersList";

const initialProducts = [
  { name: "Product 1", category: "Category 1", price: 20.0, quantity: 100 },
  { name: "Product 2", category: "Category 2", price: 25.0, quantity: 50 },
  { name: "Product 3", category: "Category 2", price: 229.0, quantity: 520 },
  { name: "Product 4", category: "Category 3", price: 15.0, quantity: 80 },
  { name: "Product 5", category: "Category 1", price: 30.0, quantity: 120 },
  { name: "Product 6", category: "Category 3", price: 18.0, quantity: 60 },
  { name: "Product 7", category: "Category 2", price: 40.0, quantity: 200 },
  { name: "Product 8", category: "Category 1", price: 22.0, quantity: 90 },
  { name: "Product 9", category: "Category 3", price: 28.0, quantity: 150 },
  { name: "Product 10", category: "Category 4", price: 35.0, quantity: 180 },
  { name: "Product 11", category: "Category 1", price: 15.0, quantity: 70 },
  { name: "Product 12", category: "Category 4", price: 32.0, quantity: 110 },
  { name: "Product 13", category: "Category 5", price: 25.0, quantity: 130 },
  { name: "Product 14", category: "Category 2", price: 45.0, quantity: 240 },
  { name: "Product 15", category: "Category 3", price: 20.0, quantity: 100 },
  { name: "Product 16", category: "Category 5", price: 28.0, quantity: 160 },
  { name: "Product 17", category: "Category 2", price: 38.0, quantity: 190 },
  { name: "Product 18", category: "Category 4", price: 24.0, quantity: 120 },
  { name: "Product 19", category: "Category 5", price: 42.0, quantity: 220 },
  { name: "Product 20", category: "Category 1", price: 30.0, quantity: 140 },
];


const initialOrders = [
  {
    orderId: 1,
    customerName: "John Doe",
    orderDate: "10th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 2,
    customerName: "Jane Smith",
    orderDate: "11th March, 2024",
    status: "Delivered",
  },
  {
    orderId: 3,
    customerName: "John Doe",
    orderDate: "12th March, 2024",
    status: "Cancelled",
  },
  {
    orderId: 4,
    customerName: "Jane Smith",
    orderDate: "13th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 5,
    customerName: "Alice Johnson",
    orderDate: "14th March, 2024",
    status: "Delivered",
  },
  {
    orderId: 6,
    customerName: "Bob Williams",
    orderDate: "15th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 7,
    customerName: "Eva Davis",
    orderDate: "16th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 8,
    customerName: "Chris Harris",
    orderDate: "17th March, 2024",
    status: "Delivered",
  },
  {
    orderId: 9,
    customerName: "Sarah Miller",
    orderDate: "18th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 10,
    customerName: "Michael Johnson",
    orderDate: "19th March, 2024",
    status: "Cancelled",
  },
  {
    orderId: 11,
    customerName: "Emily Davis",
    orderDate: "20th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 12,
    customerName: "Jack Smith",
    orderDate: "21st March, 2024",
    status: "Delivered",
  },
  {
    orderId: 13,
    customerName: "Sophia White",
    orderDate: "22nd March, 2024",
    status: "Shipped",
  },
  {
    orderId: 14,
    customerName: "Matthew Brown",
    orderDate: "23rd March, 2024",
    status: "Cancelled",
  },
  {
    orderId: 15,
    customerName: "Olivia Harris",
    orderDate: "24th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 16,
    customerName: "Daniel Miller",
    orderDate: "25th March, 2024",
    status: "Delivered",
  },
  {
    orderId: 17,
    customerName: "Ava Wilson",
    orderDate: "26th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 18,
    customerName: "William Davis",
    orderDate: "27th March, 2024",
    status: "Delivered",
  },
  {
    orderId: 19,
    customerName: "Emma Anderson",
    orderDate: "28th March, 2024",
    status: "Shipped",
  },
  {
    orderId: 20,
    customerName: "James Taylor",
    orderDate: "29th March, 2024",
    status: "Delivered",
  },
];

function App() {
  const getProductsFromLocalStorage = JSON.parse(
    localStorage.getItem("products")
  );
  const getOrdersFromLocalStorage = JSON.parse(localStorage.getItem("orders"));
  const [products, setProducts] = useState(
    getProductsFromLocalStorage || initialProducts
  );
  const [orders, setOrders] = useState(
    getOrdersFromLocalStorage || initialOrders
  );

  // const updateTotalOrders = (totalOrders) =>{
  //   console.log(totalOrders);
  //   setTotalOrders(totalOrders);
  // }

  // const updateTotalProducts = (totalProducts) =>{
  //   console.log("app",totalProducts)
  //   setTotalProducts(totalProducts);
  // }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Dashboard
                totalProducts={products.length}
                totalOrders={orders.length}
              />
            }
          />
          <Route
            path="/products"
            element={<Products products={products} setProducts={setProducts} />}
          />
          <Route
            path="/orders"
            element={<OrdersList orders={orders} setOrders={setOrders} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
