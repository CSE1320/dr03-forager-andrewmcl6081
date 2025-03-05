import MushroomCard from "@/components/MushroomCard";

export default function MushroomList({ mushrooms, cardSize, gridCols = 3 }) {
  if (mushrooms.length === 0) {
    return <p className="text-gray-500 text-center py-4">No mushrooms match your filters.</p>
  }

  const gridClass = gridCols === 2 ? "grid-cols-2" : "grid-cols-3";
  
  return (
    <div className="w-full mt-8">
      <ul className={`grid ${gridClass} gap-4`}>
        {mushrooms.map((mushroom) => (
          <li key={mushroom.id} className="list-none flex justify-center">
            <MushroomCard {...mushroom} size={cardSize}/>
          </li>
        ))}
      </ul>
    </div>
  );
}