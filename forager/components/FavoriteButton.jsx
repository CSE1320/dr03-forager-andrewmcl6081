"use client"

import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      onClick={onToggleFavorite}
      className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${isFavorite ? "bg-[#E54545]" : "bg-[#579076]"}`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? (
        <FaMinus className="text-white text-3xl"/>
      ) : (
        <FaPlus className="text-white text-3xl"/>
      )}
    </button>
  );
}