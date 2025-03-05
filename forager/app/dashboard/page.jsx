"use client"

import { useMemo, useState } from "react";
import { useMushroomContext } from "@/contexts/MushroomContext";
import { filterData } from "@/data/filterData";
import UserGreeting from "@/components/UserGreeting";
import MushroomOverlay from "@/components/MushroomOverlay";
import FilterPage from "@/components/FilterPage";
import MushroomList from "@/components/MushroomList";
import AppliedFilters from "@/components/AppliedFilters";
import SearchSection from "@/components/SearchSection";

export default function DashboardPage() {
  const { mushrooms } = useMushroomContext();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState(() => {
    const initialState = JSON.parse(JSON.stringify(filterData));

    // Set selected: false for all filter options
    Object.keys(initialState).forEach(category => {
      initialState[category] = initialState[category].map(filter => ({
        ...filter,
        selected: false
      }));
    });

    return initialState;
  });

  // Get selected filters as flat array
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
    return mushrooms.filter(mushroom => {
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

        // If there are no selected filters in this category, continue to the next category
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

      // If we get here, the mushroom matches all filter categories that have selections
      return true;
    });
  }, [activeFilters, searchTerm, mushrooms]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleApplyFilters = (updatedFilters) => {
    setActiveFilters(updatedFilters);
  };

  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      <MushroomOverlay/>
      <UserGreeting/>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full bg-[#F2F2F2] rounded-t-[42px] p-6 shadow-lg mt-10">
        <SearchSection onSearch={handleSearch} onFilterClick={() => setIsFilterOpen(true)}/>

        {/* AppliedFilters and MushroomList section */}
        <div className="w-full flex flex-col items-start">
          <h2 className="text-[25px] font-bold text-[#324053] mt-10">My Collection</h2>
          <AppliedFilters selectedFilters={selectedFilters}/>
          <MushroomList mushrooms={filteredMushrooms} cardSize="small"/>
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
}
