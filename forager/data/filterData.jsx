
const filterData = {
  tags: [
    { label: "Favorites", selected: true },
    { label: "Recent", selected: false },
  ],
  regions: [
    { label: "Texas", selected: true },
    { label: "North America", selected: false },
    { label: "South America", selected: false },
    { label: "Asia", selected: false },
    { label: "Europe", selected: false },
    { label: "Africa", selected: false },
  ],
  category: [
    { label: "Poisonous", selected: true },
    { label: "Medicinal", selected: false },
    { label: "Mythical", selected: false },
    { label: "Good for Broths", selected: false },
  ],
};

const defaultAppliedFilters = [
  { label: "Favorites", selected: true },
  { label: "Texas", selected: true },
  { label: "Poisonous", selected: true },
];

export { filterData, defaultAppliedFilters };