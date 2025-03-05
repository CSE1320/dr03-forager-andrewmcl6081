"use client"

import { useMushroomContext } from "@/contexts/MushroomContext";
import { FaPlus } from "react-icons/fa";
import HeaderBar from "@/components/HeaderBar";
import ErrorButton from "@/components/ErrorButton";
import WarningMessage from "@/components/WarningMessage";
import MushroomCard from "@/components/MushroomCard";
import FastFacts from "@/components/FastFacts";

export default function MushroomPage() {
  const { getSelectedMushroom } = useMushroomContext();
  const mushroom = getSelectedMushroom();

  if (!mushroom) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#F2F2F2]">
      <HeaderBar title="Match Results" backUrl="/dashboard" />

      <div className="pb-[80px] overflow-y-auto">
        {/* Error report section */}
        <div className="flex justify-center items-center gap-8 px-4 mt-2 mb-2">
          <p className="text-gray-600 text-sm ">Not what you expected?</p>
          <ErrorButton />
        </div>

        {/* Warning Message */}
        <WarningMessage />

        <div className="flex flex-col items-center mt-4">
          <div className="w-[290px] mb-1 flex justify-end">
            <p className="text-gray-600 text-sm cursor-pointer">
              Compare &gt;
            </p>
          </div>
          <MushroomCard {...mushroom} size="large"/>

          {/* Mushroom details section */}
          <div className="w-[290px] flex justify-between items-center mt-4">
            <div>
              <h1 className="text-[#324053] text-[30px] font-semibold leading-normal">{mushroom.name}</h1>
              <p 
                className="text-[20px] italic font-normal leading-normal"
                style={{ color: "rgba(32, 59, 95, 0.75)"}}
              >{mushroom.scientificName}</p>
            </div>
            <button className="bg-[#579076] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaPlus className="text-white text-3xl"/>
            </button>
          </div>

          {/* Fast Facts Section */}
          <FastFacts characteristics={mushroom.characteristics}/>

          {/* Description Section */}
          <p className="w-[290px] text-gray-700 text-md mt-10 leading-relaxed text-justify">
            {mushroom.description}
          </p>

          <div className="mt-10 px-4">
            <h2 className="text-[25px] font-bold text-[#324053]">My Collection</h2>
          </div>

        </div>
      </div>
    </div>
  );
}
