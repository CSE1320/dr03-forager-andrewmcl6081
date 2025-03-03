"use client"

import { createContext, useContext, useState, useMemo } from "react";
import { mushroomData } from "@/data/mushroomData";

const MushroomContext = createContext(undefined);

export function MushroomProvider({ children }) {
  const [mushrooms, setMushrooms] = useState(mushroomData);
  const [selectedMushroomId, setSelectedMushroomId] = useState(null);

  const getSelectedMushroom = () => {
    if (selectedMushroomId !== null) {
      return mushrooms.find(m => m.id === selectedMushroomId);
    }
    return mushrooms[0];
  }

  const value = {
    mushrooms,
    setMushrooms,
    selectedMushroomId,
    setSelectedMushroomId,
    getSelectedMushroom,
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