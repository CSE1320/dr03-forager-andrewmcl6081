// Define all possible filter options organized by category
const filterData = {
  tags: [
    { label: "Favorites" },
    { label: "Recent" },
  ],
  regions: [
    { label: "Texas" },
    { label: "North America" },
    { label: "South America" },
    { label: "Asia" },
    { label: "Europe" },
    { label: "Africa" },
  ],
  category: [
    { label: "Poisonous" },
    { label: "Medicinal" },
    { label: "Mythical" },
    { label: "Good for Broths" },
  ],
};

// These are initially applied filters when the app first loads
const defaultAppliedFilters = [];

export { filterData, defaultAppliedFilters };