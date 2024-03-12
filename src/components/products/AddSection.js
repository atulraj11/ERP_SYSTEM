import { React, useState } from "react";
import "./AddSection.css";

const AddSection = ({ closeSection, onSubmit, defaultValue }) => {
  const [newProduct, setNewProduct] = useState(
    defaultValue || {
      name: "",
      category: "Category 1",
      price: "",
      quantity: "",
    }
  );
  const [errors, setErrors] = useState("");

  // console.log(defaultValue)
  const handleChange = (e) => {
    console.log("handlechnge");
    const { name, value } = e.target;
    // console.log(e.target.name)
    setNewProduct({
      ...newProduct,
      [name]:
        name === "price"
          ? parseFloat(value)
          : name === "quantity"
          ? parseInt(value)
          : value,
    });
  };

  const validateForm = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.price &&
      newProduct.quantity
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(newProduct)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(newProduct);
    closeSection();
  };

  return (
    <div
      className="add-section-container"
      onClick={(e) => {
        if (e.target.className === "add-section-container") closeSection();
      }}
    >
      <div className="add-edit-section">
        <form>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              name="name"
              type="text"
              value={newProduct.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Category">Category</label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
              <option value="Category 5">Category 5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price(INR)</label>
            <input
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={newProduct.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Quantity">Quantity</label>
            <input
              name="quantity"
              type="number"
              min="0"
              onChange={handleChange}
              value={newProduct.quantity}
            />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSection;
