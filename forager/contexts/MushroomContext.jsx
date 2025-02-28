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
    
  })
}