import { useMushroomContext } from "@/contexts/MushroomContext";
import MushroomList from "./MushroomList";

export default function SimilarMatchesGrid() {
  const { getSimilarMushrooms } = useMushroomContext();

  // Get smilar mushrooms all except the selected one
  const similarMushrooms = getSimilarMushrooms().slice(0, 4);

  if (similarMushrooms.length === 0) return null;

  return (
    <div className="mt-10 w-full px-4">
      <h2 className="text-[25px] font-bold text-[#324053] text-center mb-6">
        Similar Matches
      </h2>
      <MushroomList 
        mushrooms={similarMushrooms}
        cardSize="small"
        gridCols={2}
      />
    </div>
  );
}