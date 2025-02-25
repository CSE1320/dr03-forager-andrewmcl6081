export default function Pill({ label, selected }) {
  return (
    <div className={`inline-flex items-center justify-center px-4 py-1 text-sm font-semibold rounded-full cursor-pointer transition-colors
    ${selected ? "bg-[#579076] text-white" : "bg-gray-300 text-gray-700"}`}>
      {label}
    </div>
  );
}