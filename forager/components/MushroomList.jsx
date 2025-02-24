import MushroomCard from "./MushroomCard";
import { mushroomData } from "@/data/mushroomData";

export default function MushroomList({ mushrooms = mushroomData }) {
  if (mushrooms.length === 0) {
    return <p className="text-gray-500 text-center py-4">No mushrooms match your filters.</p>
  }
  
  return (
    <div className="w-full mt-8">
      <ul className="grid grid-cols-3 gap-4">
        {mushrooms.map((mushroom) => (
          <li key={mushroom.name} className="list-none cursor-pointer">
            <MushroomCard {...mushroom} />
          </li>
        ))}
      </ul>
    </div>
  );
}