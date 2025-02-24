
const mushroomData = [
  {
    name: "Death Cap",
    scientificName: "Amanita phalloides",
    imgPath: "/images/mushroom1.jpg",
    hasWarning: true,
    filters: {
      tags: ["Favorites"],
      regions: ["Texas", "North America"],
      category: ["Poisonous"]
    }
  },
  {
    name: "Paddy Straw",
    scientificName: "Volvariella volvacea",
    imgPath: "/images/mushroom2.jpg",
    hasWarning: false,
    filters: {
      tags: ["Recent"],
      regions: ["Asia"],
      category: ["Good for Broths"]
    }
  },
  {
    name: "Destroying Angel",
    scientificName: "Amanita verna",
    imgPath: "/images/mushroom3.jpg",
    hasWarning: true,
    filters: {
      tags: ["Favorites"],
      regions: ["Texas", "North America"],
      category: ["Poisonous"]
    }
  },
  {
    name: "False Death Cap",
    scientificName: "Amanita citrina",
    imgPath: "/images/mushroom4.jpg",
    hasWarning: true,
    filters: {
      tags: ["Recent"],
      regions: ["Europe"],
      category: ["Poisonous"]
    }
  },
  {
    name: "Puffball",
    scientificName: "Lycoperdon perlatum",
    imgPath: "/images/mushroom5.jpg",
    hasWarning: false,
    filters: {
      tags: ["Favorites"],
      regions: ["Europe"],
      category: ["Medicinal"]
    }
  }
];

export { mushroomData };