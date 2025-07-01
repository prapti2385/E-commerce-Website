import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ----------- Input Filter -----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Fixed filtering logic
  const filteredData = () => {
    let filteredProducts = products;

    // Apply search query filter
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category/selection filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => {
        const { category, color, company, newPrice, title } = product;
        return (
          category === selectedCategory.toLowerCase() ||
          color === selectedCategory.toLowerCase() ||
          company === selectedCategory ||
          newPrice === selectedCategory ||
          title === selectedCategory.toLowerCase()
        );
      });
    }

    // Map to Card components
    return filteredProducts.map((product, index) => (
      <Card
        key={`${product.title}-${index}`}
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
      />
    ));
  };

  const result = filteredData();

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default App;