import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch && onSearch(value);
  }

  return (
    <div className="flex items-center bg-white p-3 rounded-full w-[85%] shadow-md">
      <FaSearch className="text-gray-500 text-xl ml-3"/>
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="w-full bg-transparent outline-none px-3 text-gray-500"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}