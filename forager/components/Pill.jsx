
export default function Pill({ label, selected }) {
  return (
    <div className={`inline-flex items-center justify-center px-4 text-sm font-semibold rounded-full
    ${selected ? "bg-[#579076] text-white" : "bg-gray-300 text-gray-700"}`}>
      {label}
    </div>
  );
};