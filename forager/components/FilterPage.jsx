"use client"

import { filterData } from "@/data/filterData";
import PillList from "./PillList";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function FilterPage({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center z-[60] transition-opacity duration-300">
      <div 
        className={`w-[95%] max-w-md h-[90vh] bg-[#F2F2F2] rounded-[32px] p-6 shadow-lg z-[50] transition-transform duration-300 ease-in-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-lg font-bold text-center flex-grow text-black">FILTERS</h2>
          <button onClick={handleClose} className="text-2xl">
            <IoClose color="black"/>
          </button>
        </div>

        <PillList title="Tags" pills={filterData.tags} />
        <PillList title="Regions" pills={filterData.regions} />
        <PillList title="Category" pills={filterData.category} />
      </div>
    </div>
  );
};