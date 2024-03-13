import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import AddSection from "./AddSection";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = ({ products, setProducts }) => {
  const [showAddSection, setShowAddSection] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const handleDeleteRow = (productId) => {
    const updatedProducts = products.filter((_, idx) => idx !== productId);
    setProducts(updatedProducts);
  };

  const handleEditRow = (productId) => {
    setEditingProductId(productId);
    setShowAddSection(true);
  };

  const handleSubmit = (newProduct) => {
    editingProductId === null
      ? setProducts([...products, newProduct])
      : setProducts(
          products.map((currProduct, productId) => {
            if (productId !== editingProductId) {
              return currProduct;
            }
            return newProduct;
          })
        );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPageCount = Math.ceil(products.length / productsPerPage);

  const handlePagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPageCount) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container">
      <div className="container-inside-product">
        <Link to="/">
          <FaArrowLeft
            className="arrow-icon"
            style={{ height: "2rem", width: "2rem" }}
          />
        </Link>
        <div className="product-text">
          <span>Products Management</span>
        </div>
        <div className="product-list">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, productId) => (
                <tr key={productId}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <span className="actions">
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => {
                          handleEditRow(productId);
                        }}
                      />
                      <BsFillTrashFill
                        className="delete-product-btn"
                        onClick={() => {
                          handleDeleteRow(productId);
                        }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="add-button"
            onClick={() => setShowAddSection(true)}
          >
            Add Product
          </button>
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

      {showAddSection && (
        <AddSection
          closeSection={() => {
            setShowAddSection(false);
            setEditingProductId(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={
            editingProductId !== null && currentProducts[editingProductId]
          }
        />
      )}
    </div>
  );
};

export default Products;
