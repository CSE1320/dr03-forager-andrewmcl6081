// Define all possible filter options organized by category
const filterData = {
  tags: [
    { label: "Favorites", selected: false },
    { label: "Recent", selected: false },
  ],
  regions: [
    { label: "Texas", selected: false },
    { label: "North America", selected: false },
    { label: "South America", selected: false },
    { label: "Asia", selected: false },
    { label: "Europe", selected: false },
    { label: "Africa", selected: false },
  ],
  category: [
    { label: "Poisonous", selected: false },
    { label: "Medicinal", selected: false },
    { label: "Mythical", selected: false },
    { label: "Good for Broths", selected: false },
  ],
};

// These are initially applied filters when the app first loads
const defaultAppliedFilters = [];

export { filterData, defaultAppliedFilters };