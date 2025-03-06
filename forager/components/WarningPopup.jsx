"use client"

import { AlertTriangle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function WarningPopup({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);

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

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}>
      <div className={`relative w-full max-w-md mx-4 p-6 rounded-lg bg-red-500 text-white shadow-lg transition-all duration-300 ease-in-out ${isAnimating ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0"}`}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
          aria-label="Close"
        >
          <X size={24}/>
        </button>

        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-0.5"/>
          <div>
            <h2 className="text-lg font-bold mb-2">ATTENTION!</h2>
            <p className="text-white/90 text-sm">
              Our system can make mistakes! Remember to verify important information and use your own judgement to
              determine if any mushroom is safe. Be sure to use the <span className="font-semibold">"Report Error"</span>{" "}
              button if you suspect a mistake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}