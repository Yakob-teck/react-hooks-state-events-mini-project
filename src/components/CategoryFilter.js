import React from "react";
import { CATEGORIES } from "../data"; // Make sure to import CATEGORIES

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
