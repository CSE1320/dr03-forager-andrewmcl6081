import Pill from "./Pill";

export default function PillList({ title, pills }) {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg text-black">{title}</h3>
      <div className="flex flex-wrap gap-3 mt-2">
        {pills.map(({ label, selected }) => (
          <Pill key={label} label={label} selected={selected} />
        ))}
      </div>
    </div>
  );
};