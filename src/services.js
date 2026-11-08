//Creating services array with 3 items
const services = [
  {
    id: 1,
    name: "Strength and Conditioning",
    description: "Involving injury return to play",
    price: 50
  },
  {
    id: 2,
    name: "Nutrition Coaching",
    description: "Nutrition guidance and planning",
    price: 50
  },
  {
    id: 3,
    name : "Mental Training",
    description: "$10 per call, starting at 2 calls per month, and up to 4 calls per month",
    price: 20
  },
  {
    id: 4,
    name: "Combined Training Package",
    description: "Combine Strength and Conditioning with Nutrition for a discount",
    price: 85
  }
];

//making services available for other JS modules (files) to import
export default services;