"use client"

import { useMushroomContext } from "@/contexts/MushroomContext";
import { useState, useEffect } from "react";
import HeaderBar from "@/components/HeaderBar";
import ErrorButton from "@/components/ErrorButton";
import WarningMessage from "@/components/WarningMessage";
import MushroomCard from "@/components/MushroomCard";
import FastFacts from "@/components/FastFacts";
import SimilarMatchesGrid from "@/components/SimilarMatchesGrid";
import WarningPopup from "@/components/WarningPopup";
import FavoriteButton from "@/components/FavoriteButton";

export default function MushroomPage() {
  const { 
    getSelectedMushroom, 
    toggleFavorite, 
    hasShownToxicWarning, 
    markToxicWarningAsShown 
  } = useMushroomContext();
  const selectedMushroom = getSelectedMushroom();
  const [showWarningPopup, setShowWarningPopup] = useState(false);
  const [isToxicMushroom, setIsToxicMushroom] = useState(false);

  useEffect(() => {
    // Check if the mushroom is poisonous or has a warning flag
    if (selectedMushroom && (selectedMushroom.hasWarning || selectedMushroom.characteristics?.isToxic || selectedMushroom.filters?.category?.includes("Poisonous"))) {
      if (!hasShownToxicWarning) {
        setShowWarningPopup(true);
      }
      setIsToxicMushroom(true);
    } else {
      setShowWarningPopup(false);
      setIsToxicMushroom(false);
    }
  }, [selectedMushroom, hasShownToxicWarning]);

  const handleToggleFavorite = () => {
    toggleFavorite(selectedMushroom.id);
  }

  const handleCloseWarning = () => {
    setShowWarningPopup(false);
    markToxicWarningAsShown();
  }

  if (!selectedMushroom) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#F2F2F2]">
      <HeaderBar title="Match Results" backUrl="/dashboard" />

      {/* Warning Popup */}
      <WarningPopup 
        isOpen={showWarningPopup}
        onClose={handleCloseWarning}
      />

      <div className="pb-[80px] overflow-y-auto">
        {/* Error report section */}
        <div className="flex justify-center items-center gap-8 px-4 mt-2 mb-2">
          <p className="text-gray-600 text-sm ">Not what you expected?</p>
          <ErrorButton />
        </div>

        {/* Warning Message */}
        {isToxicMushroom && <WarningMessage />}

        <div className="flex flex-col items-center mt-4">
          <div className="w-[290px] mb-1 flex justify-end">
            <p className="text-gray-600 text-sm cursor-pointer">
              Compare &gt;
            </p>
          </div>
          <MushroomCard {...selectedMushroom} size="large"/>

          {/* Mushroom details section */}
          <div className="w-[290px] flex justify-between items-center mt-4">
            <div>
              <h1 className="text-[#324053] text-[30px] font-semibold leading-normal">{selectedMushroom.name}</h1>
              <p 
                className="text-[20px] italic font-normal leading-normal"
                style={{ color: "rgba(32, 59, 95, 0.75)"}}
              >{selectedMushroom.scientificName}</p>
            </div>
            
            <FavoriteButton 
              isFavorite={selectedMushroom.characteristics?.isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>

          {/* Fast Facts Section */}
          <FastFacts characteristics={selectedMushroom.characteristics}/>

          {/* Description Section */}
          <p className="w-[290px] text-gray-700 text-md mt-10 leading-relaxed text-justify">
            {selectedMushroom.description}
          </p>

          {/* Similar Matches Section */}
          <SimilarMatchesGrid />
        </div>
      </div>
    </div>
  );
}
