import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="w-64 p-4 bg-gray-100 h-full">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`p-2 cursor-pointer ${
              selectedCategory === category.id ? "bg-gray-300" : ""
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
