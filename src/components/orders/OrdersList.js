import { React} from "react";
import OrderCard from "./OrderCard";
import "./OrdersList.css";

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
      <h1>Orders Management</h1>
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
