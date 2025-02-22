import Image from "next/image";

export default function MushroomOverlay() {
  return (
    <div className="absolute top-0 right-0 z-0">
      <Image 
        src="/images/mushroom_vector.svg"
        alt="Mushroom Vector"
        height={175}
        width={175}
        priority
      />
    </div>
  );
}