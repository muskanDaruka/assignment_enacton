import React,{useState} from "react";

const SortRestorationAndSearch = ({ onSearch, onSort }) => {

  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);  
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);  
  };

  return (
    <div className="flex space-x-4 p-4">
      <input
        type="text"
        placeholder="Search stores..."
        className="border p-2 flex-grow"
        value={searchTerm} 
        onChange={handleSearchChange}
      />
      <select className="border p-2" onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="featured">Featured</option>
        <option value="popularity">Popularity</option>
        <option value="cashback">Cashback</option>
      </select>
    </div>
  );
};

export default SortRestorationAndSearch;
