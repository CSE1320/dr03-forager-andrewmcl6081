"use client"

import { filterData } from "@/data/filterData";
import PillList from "./PillList";
import { useState, useEffect, use } from "react";
import { IoClose } from "react-icons/io5";

export default function FilterPage({ isOpen, onClose, onApplyFilters, initialFilters }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [localFilters, setLocalFilters] = useState(initialFilters || filterData);

  // Reset local filters when opening modal
  useEffect(() => {
    if (isOpen && initialFilters) {
      setLocalFilters(initialFilters);
    }
  }, [isOpen, initialFilters]);

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

  const handleApply = () => {
    // Pass the selected filters back to the dashboard
    onApplyFilters && onApplyFilters(localFilters);
    handleClose();
  }

  const handlePillClick = (category, label) => {
    setLocalFilters(prev => {
      const updatedFilters = {...prev};
      
      updatedFilters[category] = updatedFilters[category].map(pill => {
        return {
          ...pill,
          selected: pill.label === label
        };
      });

      return updatedFilters;
    });
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
        
        {Object.entries(localFilters).map(([category, items]) => (
          <div key={category} className="mt-10">
            <h3 className="font-bold text-lg text-black capitalize">{category}</h3>
            <PillList pills={items} onPillClick={(label) => handlePillClick(category, label)} />
          </div>
        ))}

        <div className="mt-10 flex justify-center">
          <button onClick={handleApply} className="bg-[#579076] text-white py-3 px-8 rounded-full font-bold">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};