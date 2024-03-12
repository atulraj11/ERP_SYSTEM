import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import AddSection from "./AddSection";
import { FaArrowLeft } from "react-icons/fa6";


import "./Products.css";
import { Link } from "react-router-dom";

const Products = ({ products, setProducts }) => {
  const [showAddSection, setShowAddSection] = useState(false);

  const [editingProductId, setEditingProductId] = useState(null);

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

  return (
    <div className="container">
      
      <div className="product-text">
      <Link to="/">
        <FaArrowLeft className="arrow-icon" style={{height:"2rem", width:"2rem"}}/>
      </Link>
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
            {products.map((product, productId) => {
              return (
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
              );
            })}
          </tbody>
        </table>
        <button className="add-button" onClick={() => setShowAddSection(true)}>
          Add Product
        </button>
      </div>

      {showAddSection && (
        <AddSection
          closeSection={() => {
            setShowAddSection(false);
            setEditingProductId(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={editingProductId !== null && products[editingProductId]}
        />
      )}
    </div>
  );
};

export default Products;
