"use client"

import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import UserGreeting from "@/components/UserGreeting";
import MushroomOverlay from "@/components/MushroomOverlay";
import FilterPage from "@/components/FilterPage";
import MushroomList from "@/components/MushroomList";
import { useMemo, useState } from "react";
import { defaultAppliedFilters, filterData } from "@/data/filterData";
import { mushroomData } from "@/data/mushroomData";
import PillList from "@/components/PillList";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize activeFilters with our filterData, marking default items as selected
  const [activeFilters, setActiveFilters] = useState(() => {
    // Make a deep copy of filterData
    const initialState = JSON.parse(JSON.stringify(filterData));

    // Set default filters as selected
    defaultAppliedFilters.forEach(defaultFilter => {
      Object.keys(initialState).forEach(category => {
        initialState[category] = initialState[category].map(filter =>
          filter.label === defaultFilter.label
            ? { ...filter, selected: true }
            : filter
        );
      });
    });

    return initialState;
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleApplyFilters = (updatedFilters) => {
    setActiveFilters(updatedFilters);
  };

  // Get a flattened list of selected filters for display
  const selectedFilters = useMemo(() => {
    const result = [];

    Object.entries(activeFilters).forEach(([category, filters]) => {
      filters.forEach(filter => {
        if (filter.selected) {
          result.push(filter.label);
        }
      });
    });

    return result;
  }, [activeFilters]);

  // Filter mushrooms based on active filters and search
  const filteredMushrooms = useMemo(() => {
    return mushroomData.filter(mushroom => {
      // Apply search filter
      if (searchTerm && !mushroom.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Check if any filters are selected
      const hasSelectedFilters = Object.values(activeFilters).some(
        filterGroup => filterGroup.some(filter => filter.selected)
      );

      // If no filters are selected, show all mushrooms
      if (!hasSelectedFilters) {
        return true;
      }

      // For each filter category
      for (const [category, filters] of Object.entries(activeFilters)) {
        // Get selected filter labels in this category
        const selectedInCategory = filters.filter(f => f.selected).map(f => f.label);

        // If there are no selected filters in this category, continue to next category
        if (selectedInCategory.length === 0) {
          continue;
        }

        // Check if the mushroom has any of the selected filters in this category
        const hasMatchInCategory = selectedInCategory.some(
          filterLabel => mushroom.filters[category]?.includes(filterLabel)
        );

        // If there's no match in a category with selections, exclude the mushroom
        if (!hasMatchInCategory) {
          return false;
        }
      }

      // If we get here, the mushroom matches a;; filter categories that have selections
      return true;
    });
  }, [activeFilters, searchTerm]);

  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      <MushroomOverlay/>
      <UserGreeting/>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full bg-[#F2F2F2] rounded-t-[42px] p-6 shadow-lg mt-10">
        <div className="flex items-center justify-between mt-2">
          <SearchBar onSearch={handleSearch} />
          <button className="mr-2 p-2" onClick={() => setIsFilterOpen(true)}>
            <Image
              src="/icons/filter.png"
              alt="Filter Button"
              height={20}
              width={20}
            />
          </button>
        </div>

        <div className="w-full flex flex-col items-start">
          <h2 className="text-[25px] font-bold text-[#324053] mt-10">My Collection</h2>
          
          {/* Display Applied Filters */}
          {selectedFilters.length > 0 && (
            <div className="w-full">
              <PillList 
                pills={selectedFilters.map(label => ({
                  label,
                  selected: true
                }))}
              />
            </div>
          )}

          <MushroomList mushrooms={filteredMushrooms} />
        </div>
      </div>

      <FilterPage 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        initialFilters={activeFilters}
      />
    </div>
  );
};
