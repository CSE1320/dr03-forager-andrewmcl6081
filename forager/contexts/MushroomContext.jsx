"use client"

import { createContext, useContext, useState, useMemo } from "react";
import { mushroomData } from "@/data/mushroomData";

const MushroomContext = createContext(undefined);

export function MushroomProvider({ children }) {
  const [mushrooms, setMushrooms] = useState(mushroomData);
  const [selectedMushroomId, setSelectedMushroomId] = useState(null);
  const [hasShownToxicWarning, setHasShownToxicWarning] = useState(false);

  const getSelectedMushroom = () => {
    if (selectedMushroomId !== null) {
      return mushrooms.find(m => m.id === selectedMushroomId);
    }
    return mushrooms[0];
  }

  const getSelectedMushroomId = () => {
    if (selectedMushroomId !== null) {
      return selectedMushroomId;
    }
    return mushrooms[0]?.id;
  }

  const getAllMushrooms = () => {
    return mushrooms;
  }

  const getSimilarMushrooms = () => {
    const currentId = getSelectedMushroomId();
    return mushrooms.filter(mushroom => mushroom.id !== currentId);
  }

  const toggleFavorite = (mushroomId) => {
    setMushrooms(prevMushrooms => 
      prevMushrooms.map(mushroom => 
        mushroom.id === mushroomId
          ? {
            ...mushroom,
            characteristics: {
              ...mushroom.characteristics,
              isFavorite: !mushroom.characteristics.isFavorite
            },
            // Also update the filters to include or remove the "Favorites" tag
            filters: {
              ...mushroom.filters,
              tags: mushroom.characteristics.isFavorite
                ? (mushroom.filters.tags || []).filter(tag => tag !== "Favorites")
                : [...(mushroom.filters.tags || []), "Favorites"]
            }
          }
        : mushroom
      )
    );
  }

  const markToxicWarningAsShown = () => {
    setHasShownToxicWarning(true);
  }

  const value = {
    mushrooms,
    setMushrooms,
    selectedMushroomId,
    setSelectedMushroomId,
    getSelectedMushroom,
    getSelectedMushroomId,
    getAllMushrooms,
    getSimilarMushrooms,
    toggleFavorite,
    markToxicWarningAsShown,
    hasShownToxicWarning,
    resetSelection: () => setSelectedMushroomId(null)
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