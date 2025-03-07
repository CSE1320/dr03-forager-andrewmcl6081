// data/development.js
const dummyData = {
  message: "This is dummy data from a config file",
  status: "success",
};

const warningMessage = {
  header: "warning",
  icon: "/icons/icon_warning.svg",
  message: "This is a toxic species, proceed with caution."
};

// More than one export.
export { warningMessage, dummyData }; // Requires import {warningMessage, dummyData} from './data/development.js';
