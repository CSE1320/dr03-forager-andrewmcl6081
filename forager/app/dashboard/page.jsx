"use client"

import UserGreeting from "@/components/UserGreeting";
import MushroomOverlay from "@/components/MushroomOverlay";
import FilterPage from "@/components/FilterPage";
import MushroomList from "@/components/MushroomList";
import AppliedFilters from "@/components/AppliedFilters";
import SearchSection from "@/components/SearchSection";
import { useState } from "react";
import { useMushroomContext } from "@/contexts/MushroomContext";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {
    handleSearch,
    updateFilters,
    selectedFilters,
    filteredMushrooms,
    activeFilters
  } = useMushroomContext();

  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      <MushroomOverlay/>
      <UserGreeting/>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full bg-[#F2F2F2] rounded-t-[42px] p-6 shadow-lg mt-10">
        <SearchSection onSearch={handleSearch} onFilterClick={() => setIsFilterOpen(true)}/>

        {/* AppliedFilters and MushroomList section */}
        <div className="w-full flex flex-col items-start">
          <h2 className="text-[25px] font-bold text-[#324053] mt-10">My Collection</h2>
          <AppliedFilters selectedFilters={selectedFilters}/>
          <MushroomList mushrooms={filteredMushrooms} />
        </div>
      </div>

      <FilterPage 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        initialFilters={activeFilters}
      />
    </div>
  );
}
