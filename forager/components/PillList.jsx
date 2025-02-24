import Pill from "./Pill";

export default function PillList({ title, pills }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {pills.map(({ label, selected }) => (
        <Pill key={label} label={label} selected={selected} />
      ))}
    </div>
  );
};