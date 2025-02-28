import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/FilterButton";

export default function SearchSection({ onSearch, onFilterClick }) {
  return (
    <div className="flex items-center justify-between mt-2">
      <SearchBar onSearch={onSearch}/>
      <FilterButton onClick={onFilterClick}/>
    </div>
  );
}