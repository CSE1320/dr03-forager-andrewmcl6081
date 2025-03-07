"use client"

import HeaderBar from "@/components/HeaderBar";
import WarningMessage from "@/components/WarningMessage";
import MushroomList from "@/components/MushroomList";
import { useMushroomContext } from "@/contexts/MushroomContext";
import { useMemo } from "react";
import ComparisonTable from "@/components/ComparisonTable";


export default function MushroomComparisonPage() {
  const { getSelectedMushroom } = useMushroomContext();
  const selectedMushroom = getSelectedMushroom();

  const userMushroom = useMemo(() => {
    return {
      id: 6,
      name: "Your Photo",
      scientificName: "",
      imgPath: "/images/mushroom2.jpg",
      hasWarning: false,
      filters: {},
      characteristics: {},
      description: ""
    };
  }, []);

  const comparisonMushrooms = useMemo(() => {
    return [userMushroom, selectedMushroom];
  }, [userMushroom, selectedMushroom]);

  const isToxic = selectedMushroom && (
    selectedMushroom.hasWarning ||
    selectedMushroom.characteristics?.isToxic ||
    selectedMushroom.filters?.category?.includes("Poisonous")
  );


  return (
    <div className="w-full min-h-screen bg-[#F2F2F2]">
      <HeaderBar title="Compare" backUrl="/mushroom"/>

      <div className="px-6 py-4">
        {isToxic && <WarningMessage />}
      </div>

      <div className="mt-4 mb-8">
        <MushroomList 
          mushrooms={comparisonMushrooms}
          cardSize="medium"
          gridCols={2}
        />
      </div>

      <ComparisonTable mushroom={selectedMushroom}/>
    </div>
  );
}
