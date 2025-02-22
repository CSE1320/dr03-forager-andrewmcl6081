import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import UserGreeting from "@/components/UserGreeting";
import MushroomOverlay from "@/components/MushroomOverlay";
import Pill from "@/components/Pill";

export default function DashboardPage() {
  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      <MushroomOverlay/>
      <UserGreeting/>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full bg-[#F2F2F2] rounded-t-[42px] p-6 shadow-lg mt-10">
        <div className="flex items-center justify-between mt-2">
          <SearchBar/>
          <button className="mr-2 p-2">
            <Image
              src="/icons/filter.png"
              alt="Filter Button"
              height={20}
              width={20}
            />
          </button>
        </div>

        <h2 className="text-[25px] font-bold text-[#324053] mt-10">My Collection</h2>
        <Pill/>
      </div>
    </div>
  );
}
