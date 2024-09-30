import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center mx-auto my-8">
      <form onSubmit={handleSearch} className="flex items-center md:w-96">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:border-secondary"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-main text-white px-4 py-2 rounded-r focus:outline-none hover:bg-lightblue"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
