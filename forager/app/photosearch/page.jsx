import BackgroundSearch from "@/components/BackgroundScreen";
import { FaArrowLeft, FaBolt } from "react-icons/fa";
import Image from "next/image";

export default function PhotoSearchPage() {
  return (
    <BackgroundSearch imageUrl="/images/mushroom_background.png">
      {/* Top Icons Bar */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[132px] flex items-center justify-between px-6 py-4">
        <FaArrowLeft className="text-white text-2xl cursor-pointer"/>
        <FaBolt className="text-white text-2xl cursor-pointer"/>
      </div>

      {/* Camera Frame */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-64 h-64 border-2 border-white"/>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-black bg-opacity-50 flex items-center justify-around px-6">
        <button className="p-2">
          <Image
            src="/images/album.png"
            alt="Gallery"
            width={38}
            height={38}
            priority
          />
        </button>
        <button className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full"/>
        </button>
        <button className="p-2">
          <Image
            src="/images/flip.png"
            alt="Flip Camera"
            width={38}
            height={38}
            priority
          />
        </button>
      </div>
    </BackgroundSearch>
  );
}
