import React from "react";
import { IoBag } from "react-icons/io5";

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <div key={Math.random()}>
      <section className="card" >
        <img
          src={img}
          alt={title}
          className="card-image"
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}{star}{star}{star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <IoBag className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
