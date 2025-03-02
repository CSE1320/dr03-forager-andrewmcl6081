import MushroomCard from "./MushroomCard";
import { useMushroomContext } from "@/contexts/MushroomContext";

export default function MushroomList() {
  const { filteredMushrooms } = useMushroomContext();
  
  if (filteredMushrooms.length === 0) {
    return <p className="text-gray-500 text-center py-4">No mushrooms match your filters.</p>
  }
  
  return (
    <div className="w-full mt-8">
      <ul className="grid grid-cols-3 gap-4">
        {filteredMushrooms.map((mushroom) => (
          <li key={mushroom.name} className="list-none cursor-pointer">
            <MushroomCard {...mushroom} />
          </li>
        ))}
      </ul>
    </div>
  );
}