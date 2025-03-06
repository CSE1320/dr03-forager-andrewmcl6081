import { useMushroomContext } from "@/contexts/MushroomContext";
import { useState } from "react";
import { Info } from "lucide-react";
import MushroomList from "./MushroomList";
import InfoTooltip from "./InfoToolTip";

export default function SimilarMatchesGrid() {
  const { getSimilarMushrooms } = useMushroomContext();
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);

  // Get smilar mushrooms all except the selected one
  const similarMushrooms = getSimilarMushrooms().slice(0, 4);

  if (similarMushrooms.length === 0) return null;

  return (
    <div className="mt-10 w-full px-4">
      <div className="relative flex justify-center items-center mb-6">
        <h2 className="text-[25px] font-bold text-[#324053] text-center">
          Similar Matches
        </h2>

        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setShowInfoTooltip(true)}
            className="focus:outline-none"
            aria-label="Show information about match percentages"
          >
            <Info className="h-6 w-6 text-[#324053]"/>
          </button>
        </div>
      </div>

      <MushroomList 
        mushrooms={similarMushrooms}
        cardSize="medium"
        gridCols={2}
      />

      <InfoTooltip 
        isOpen={showInfoTooltip}
        onClose={() => setShowInfoTooltip(false)}
      />
    </div>
  );
}