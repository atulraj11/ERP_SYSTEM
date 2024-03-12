import { React} from "react";
import OrderCard from "./OrderCard";
import "./OrdersList.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


const OrdersList = ({orders, setOrders }) => {
  
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
  };
  return (
    <div className="container">
      <div className="order-text">
      <Link to="/">
        <FaArrowLeft className="arrow-icon" style={{height:"2rem", width:"2rem"}}/>
      </Link>
        <span>Orders Management</span>
      </div>
      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card-container" key={order.orderId}>
            <OrderCard
              order={order}
              updateOrderStatus={updateOrderStatus}
              deleteOrder={deleteOrder}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
