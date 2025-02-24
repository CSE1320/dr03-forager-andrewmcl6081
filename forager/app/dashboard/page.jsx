"use client"

import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import UserGreeting from "@/components/UserGreeting";
import MushroomOverlay from "@/components/MushroomOverlay";
import FilterPage from "@/components/FilterPage";
import PillList from "@/components/PillList";
import MushroomList from "@/components/MushroomList";
import { useState } from "react";
import { defaultAppliedFilters } from "@/data/filterData";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      <MushroomOverlay/>
      <UserGreeting/>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full bg-[#F2F2F2] rounded-t-[42px] p-6 shadow-lg mt-10">
        <div className="flex items-center justify-between mt-2">
          <SearchBar/>
          <button className="mr-2 p-2" onClick={() => setIsFilterOpen(true)}>
            <Image
              src="/icons/filter.png"
              alt="Filter Button"
              height={20}
              width={20}
            />
          </button>
        </div>

        <div className="w-full flex flex-col items-start">
          <h2 className="text-[25px] font-bold text-[#324053] mt-10">My Collection</h2>
          <PillList pills={defaultAppliedFilters}/>
          <MushroomList />
        </div>
      </div>

      <FilterPage isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
};
