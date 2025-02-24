import Pill from "./Pill";

export default function PillList({ pills, onPillClick }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {pills.map(({ label, selected }) => (
        <div 
          key={label} 
          onClick={() => onPillClick && onPillClick(label)}
          className="mb-2"
        >
          <Pill label={label} selected={selected} />
        </div>
      ))}
    </div>
  );
}