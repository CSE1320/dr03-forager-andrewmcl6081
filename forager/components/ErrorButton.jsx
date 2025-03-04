import { FaArrowRight } from "react-icons/fa";

export default function ErrorButton() {
  return (
    <button className="bg-[#FF5050] text-white px-2 py-2 rounded-[15px] flex items-center text-sm font-medium">
      Report Error
      <FaArrowRight className="ml-2"/>
    </button>
  );
}