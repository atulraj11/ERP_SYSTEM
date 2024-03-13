import { React, useState } from "react";
import "./OrderView.css";
import { RxCross1 } from "react-icons/rx";


const OrderView = ({ order, updateOrderStatus, closeSection }) => {
  const [newStatus, setNewStatus] = useState(order.status);

  const handleUpdateStatus = () => {
    if (newStatus.trim() !== "") {
      updateOrderStatus(order.orderId, newStatus);
    }
    
  };
  return (
    <div className="order-view" onClick={(e)=>{
        if (e.target.className === "order-view") closeSection();
    }}>
      <div className="order-view-edit">
        <RxCross1 className="cross-icon" onClick={closeSection}/>
        <h3>Order ID: {order.orderId}</h3>
        <p>Customer Name: {order.customerName}</p>
        <p>Status: <span className={`status-${order.status}`}>{order.status}</span></p>
        <p>Order Date: {order.orderDate}</p>
        <label htmlFor="newStatus" style={{marginTop:"2rem", marginBottom:0}}>Update Status:</label>
        <select
          id="newStatus"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button  className="btn update-btn" onClick={handleUpdateStatus}>Update Status</button>
      </div>
    </div>
  );
};

export default OrderView;
