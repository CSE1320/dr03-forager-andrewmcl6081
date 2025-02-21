import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      {/* Mushroom Vector */}
      <div className="absolute top-0 right-0 z-0">
        <Image 
          src="/images/mushroom_vector.svg"
          alt="Mushroom Vector"
          height={200}
          width={200}
          priority
        />
      </div>
    </div>
  );
}
