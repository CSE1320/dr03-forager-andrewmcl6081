"use client"

import { useMushroomContext } from "@/contexts/MushroomContext";
import HeaderBar from "@/components/HeaderBar";
import ErrorButton from "@/components/ErrorButton";
import WarningMessage from "@/components/WarningMessage";
import MushroomCard2 from "@/components/MushroomCard2";

export default function MushroomPage() {
  const { getSelectedMushroom } = useMushroomContext();
  const mushroom = getSelectedMushroom();

  if (!mushroom) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen bg-[#F2F2F2]">
      <HeaderBar title="Match Results" backUrl="/dashboard" />

      {/* Error report section */}
      <div className="flex justify-center items-center gap-8 px-4 mt-2 mb-2">
        <p className="text-gray-600 text-sm ">Not what you expected?</p>
        <ErrorButton />
      </div>

      {/* Warning Message */}
      <WarningMessage />

      <div className="flex flex-col items-center mt-4">
        <p className="text-gray-600 text-sm mb-1">Compare</p>
        <MushroomCard2 {...mushroom} size="large"/>
      </div>
    </div>
  );
}
