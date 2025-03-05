import React from "react";

const SELECTED_CHARACTERISTICS = [
  "diameter",
  "capShape",
  "capColor",
  "capTexture",
  "gillsType",
  "gillsColor",
  "stemShape",
  "stemColor",
  "stemRing",
  "habitat"
];

const formatLabel = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export default function FastFacts({ characteristics }) {
  return (
    <div className="w-[290px] mt-10 bg-[#8E4A49] text-white p-4 rounded-[40px]">
      <h3 className="font-bold text-[18px] mb-2">Fast Facts</h3>

      {/* Loop through only the selected characteristics we wish to display */}
      {Object.entries(characteristics)
        .filter(([key]) => SELECTED_CHARACTERISTICS.includes(key))
        .map(([key, value]) => (
          <p key={key} className="text-md capitalize">
            {formatLabel(key)}: {value}
          </p>
      ))}
    </div>
  );
}