import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function HeaderBar({ title, backUrl }) {
  return (
    <div className="bg-[#579076] text-white w-full h-[120px] rounded-b-[42px] relative">
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
  );
}