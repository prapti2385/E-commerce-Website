import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span> All
      </label>
      <Input
        handleChange={handleChange}
        name="test2"
        value={50}
        title="$0- 50"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={100}
        title="$50- 100"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={150}
        title="$100- 150"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={200}
        title="Over $150"
      />
    </div>
  );
};

export default Price;
