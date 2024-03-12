import { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import OrdersList from "./components/orders/OrdersList";

const initialProducts = [
  { name: "Product 1", category: "Category 1", price: 20.0, quantity: 100 },
  { name: "Product 2", category: "Category 2", price: 25.0, quantity: 50 },
  { name: "Product 2", category: "Category 2", price: 25.0, quantity: 50 },
];

const initialOrders= [
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
  ];

function App() {
  
  const getProductsFromLocalStorage = JSON.parse(localStorage.getItem('products'))
  const getOrdersFromLocalStorage = JSON.parse(localStorage.getItem('orders'));
  const [products, setProducts] = useState(getProductsFromLocalStorage || initialProducts);
  const [orders, setOrders] = useState(getOrdersFromLocalStorage || initialOrders);

  // const updateTotalOrders = (totalOrders) =>{
  //   console.log(totalOrders);
  //   setTotalOrders(totalOrders);
  // }


  // const updateTotalProducts = (totalProducts) =>{
  //   console.log("app",totalProducts)
  //   setTotalProducts(totalProducts);
  // }


  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(()=>{
    localStorage.setItem('orders',JSON.stringify(orders));
  },[orders])

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard totalProducts={products.length} totalOrders={orders.length}/>} />
          <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
          <Route path="/orders" element={<OrdersList orders={orders} setOrders={setOrders}/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
