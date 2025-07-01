import React from "react";
import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span> All
        </label>
        <Input
          handleChange={handleChange}
          name="test1"
          value="Sneakers"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          name="test1"
          value="Flats"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          name="test1"
          value="Sandals"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          name="test1"
          value="Heels"
          title="Heels"
        />
      </div>
    </div>
  );
};

export default Category;
