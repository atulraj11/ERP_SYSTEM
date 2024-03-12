import React, { useState } from "react";
import "./OrderCard.css";
import OrderView from "./OrderView";

const OrderCard = ({ order, updateOrderStatus, deleteOrder }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="order-card">
      <div>
        <h3>Order ID: {order.orderId}</h3>
        <p>
          Status:{" "}
          <span className={`statuss-${order.status}`}>{order.status}</span>
        </p>
        <p>Order Date: {order.orderDate}</p>
      </div>
      <div className="btn-group">
        <button className="view-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
        {showDetails && (
          <OrderView
            order={order}
            updateOrderStatus={updateOrderStatus}
            closeSection={() => {
              setShowDetails(false);
            }}
          />
        )}
        <button className="delete-btn" onClick={() => deleteOrder(order.orderId)}>Delete Order</button>
      </div>
    </div>
  );
};

export default OrderCard;
