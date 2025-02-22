import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white p-3 rounded-full w-[85%] shadow-md">
      <FaSearch className="text-gray-500 text-xl ml-3"/>
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="w-full bg-transparent outline-none px-3 text-gray-500"
      />
    </div>
  );
}