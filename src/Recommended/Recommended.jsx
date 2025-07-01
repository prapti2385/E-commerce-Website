import React from "react";
import '../style.css'
import './recommended.css'
import Buttons from "../components/Buttons";

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons handleClick={handleClick} title="All Products" value=""/>
        <Buttons handleClick={handleClick} title="Nike" value="Nike"/>
        <Buttons handleClick={handleClick} title="Adidas" value="Adidas"/>
        <Buttons handleClick={handleClick} title="Puma" value="Puma"/>
        <Buttons handleClick={handleClick} title="Vans" value="Vans"/>
      </div>
    </div>
  );
};

export default Recommended;
