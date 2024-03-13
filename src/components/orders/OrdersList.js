import { React, useState } from "react";
import OrderCard from "./OrderCard";
import "./OrdersList.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const OrdersList = ({ orders, setOrders }) => {
  const ordersPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPageCount = Math.ceil(orders.length / ordersPerPage);

  const handlePagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPageCount) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="container">
      <div className="container-inside-order">
        <Link to="/">
          <FaArrowLeft
            className="arrow-order-icon"
            style={{ height: "2rem", width: "2rem" }}
          />
        </Link>
        <div className="order-text">
          <span>Orders Management</span>
        </div>
        <div className="orders-list">
          {orders
            .slice(
              (currentPage - 1) * ordersPerPage,
              currentPage * ordersPerPage
            )
            .map((order) => (
              <div className="order-card-container" key={order.orderId}>
                <OrderCard
                  order={order}
                  updateOrderStatus={updateOrderStatus}
                  deleteOrder={deleteOrder}
                />
              </div>
            ))}
        </div>
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={() => handlePagination(currentPage - 1)}>
              <FaChevronLeft />
            </button>
          )}
          {renderPageNumbers()
            .filter((number) => {
              return (
                number === 1 ||
                number === currentPage ||
                number === currentPage - 1 ||
                number === currentPage + 1
              );
            })
            .map((number) => (
              <button
                key={number}
                onClick={() => handlePagination(number)}
                className={number === currentPage ? "active" : ""}
              >
                {number}
              </button>
            ))}
          {currentPage < totalPageCount && (
            <button onClick={() => handlePagination(currentPage + 1)}>
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
