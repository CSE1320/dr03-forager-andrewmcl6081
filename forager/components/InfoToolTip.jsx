"use client"

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function InfoTooltip({ isOpen, onClose, title }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Close when clicking outside the tooltip
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target) && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-start justify-center pt-32 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}}
    >
      <div
        ref={tooltipRef}
        className={`relative w-full max-w-sm mx-4 p-5 rounded-lg bg-[#5DAA7D] text-white shadow-lg transition-all duration-300 ease-in-out ${isAnimating ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0"}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200"
          aria-label="Close"
        >
          <X size={20}/>
        </button>

        <div className="pr-5">
          {title && <h3 className="font-semibold mb-2">{title}</h3>}
          <p>Percentages indicate the confidence level of the match</p>
        </div>
      </div>
    </div>
  );
}