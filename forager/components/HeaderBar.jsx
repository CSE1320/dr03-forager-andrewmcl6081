import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function HeaderBar({ title, backUrl }) {
  return (
    <>
      {/* Placeholder div with the same height as header to create space */}
      <div className="w-full h-[120px]"></div>

      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#579076] text-white w-full h-[120px] rounded-b-[42px]">
        <div className="absolute bottom-6 w-full px-6 flex items-center">
          <Link href={backUrl || "/dashboard"}>
            <div className="text-2xl cursor-pointer">
              <FaArrowLeft />
            </div>
          </Link>

          <div className="flex-grow flex justify-center">
            <h1 className="text-white font-bold text-3xl">
              {title}
            </h1>
          </div>

          <div className="w-5"></div>
        </div>
      </div>
    </>
  );
}