import MushroomCard from "./MushroomCard";
import { mushroomData } from "@/data/mushroomData";

export default function MushroomList() {
  return (
    <div className="w-full mt-8">
      <ul className="grid grid-cols-3 gap-4">
        {mushroomData.map((mushroom) => (
          <li key={mushroom.name} className="list-none cursor-pointer">
            <MushroomCard {...mushroom} />
          </li>
        ))}
      </ul>
    </div>
  );
}