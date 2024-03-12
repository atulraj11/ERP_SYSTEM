import React from "react";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaBox, FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = ({ totalOrders, totalProducts }) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="metric-card">
        <div>
          <h2>Total Products</h2>
          <div className="metric-value metric-value-left">
            <Link to="/products">
              <span className="metric-value">{totalProducts}</span>
              <FaBox className="metric-icon" />
            </Link>
          </div>
        </div>
        <div>
          <h2>Total Orders</h2>
          <div className="metric-value metric-value-right">
            <Link to="/orders">
              <span className="metric-value">{totalOrders}</span>
              <FaShoppingCart className="metric-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div>
          <h2>Sales Revenue</h2>
          <div className="metric-value metric-value-left">
            <Link to="/">
              <span className="metric-value">$10,000</span>
              <FaMoneyBillAlt className="metric-icon" />
            </Link>
          </div>
        </div>
        <div>
          <h2>Average Order Value</h2>
          <div className="metric-value metric-value-right">
            <Link to="/">
              <span className="metric-value">$200</span>
              <RiMoneyDollarCircleLine className="metric-icon" />
            </Link>
          </div>
        </div>
      </div>

      <h2>Recent Orders</h2>
      <ul className="order-list">
        <li className="order-item">
          <h3>Order #1</h3>
          <p>Customer: John Doe</p>
          <p>Date: March 10, 2024</p>
        </li>
        <li className="order-item">
          <h3>Order #2</h3>
          <p>Customer: Jane Smith</p>
          <p>Date: March 9, 2024</p>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
