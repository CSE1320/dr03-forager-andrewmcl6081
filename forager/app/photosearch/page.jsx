import BackgroundSearch from "@/components/BackgroundScreen";
import { FaArrowLeft, FaBolt } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

export default function PhotoSearchPage() {
  return (
    <BackgroundSearch imageUrl="/images/mushroom_background.png">
      {/* Top Icons Bar */}
      <div className="z-10 absolute top-0 left-0 right-0 bg-black bg-opacity-50 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[132px] flex items-center justify-between px-6 py-4">
        <Link href="/dashboard" passHref>
          <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
            <FaArrowLeft/>
          </div>
        </Link>
        <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
          <FaBolt className="text-white text-2xl cursor-pointer"/>
        </div>
      </div>

      {/* Camera Frame */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-64 h-64 border-2 border-white"/>
      </div>

      {/* Bottom Buttons */}
      <div className="z-10 absolute inset-x-0 bottom-0 h-32 bg-black bg-opacity-50 flex items-center justify-around px-6">
        <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
          <Image
            src="/icons/album.png"
            alt="Gallery"
            width={38}
            height={38}
            priority
          />
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-full cursor-pointer"/>
        </div>
        <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
          <Image
            src="/icons/flip.png"
            alt="Flip Camera"
            width={38}
            height={38}
            priority
          />
        </div>
      </div>
    </BackgroundSearch>
  );
}
