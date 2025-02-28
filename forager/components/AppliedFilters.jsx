import PillList from "./PillList";

export default function AppliedFilters({ selectedFilters }) {
  if (selectedFilters.length === 0) return null;

  return (
    <div className="w-full">
      <PillList 
        pills={selectedFilters.map(label => ({
          label,
          selected: true
        }))}
      />
    </div>
  );
}