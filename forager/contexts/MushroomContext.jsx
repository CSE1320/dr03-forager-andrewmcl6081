"use client"

import { createContext, useContext, useState, useMemo } from "react";
import { mushroomData } from "@/data/mushroomData";
import { filterData } from "@/data/filterData";

const MushroomContext = createContext(undefined);

export function MushroomProvider({ children }) {
  // Mushroom state
  const [mushrooms, setMushrooms] = useState(mushroomData);
  const [activeMushroom, setActiveMushroom] = useState(null);

  // Filter state
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
          filterLabel => mushroom.filters?.includes(filterLabel)
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

  // Context value
  const value = {
    mushrooms,
    setMushrooms,
    activeMushroom,
    setActiveMushroom,
    searchTerm,
    setActiveFilters,
    selectedFilters,
    filteredMushrooms,
    handleSearch: (value) => {
      setSearchTerm(value);
    }
  };

  return (
    <MushroomContext.Provider value={value}>
      {children}
    </MushroomContext.Provider>
  );
}

export function useMushroomContext() {
  const context = useContext(MushroomContext);
  if (context === undefined) {
    throw new Error("useMushroomContext must be used within a MushroomProvider");
  }

  return context;
}