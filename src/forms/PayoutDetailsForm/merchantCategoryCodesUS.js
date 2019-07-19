// Merchant Category Codes (MCC) for US
// Stripe requires this info to comply with US legistlation
// This data is extracted from https://stripe.com/docs/issuing/authorizations/categories

// prettier-ignore
const merchantCategoryCodes = [
  { "mcc": "5971", "label": "Art Dealers and Galleries", "category": "art_dealers_and_galleries" },
  { "mcc": "7929", "label": "Bands, Orchestras", "category": "bands_orchestras" },
  { "mcc": "7995", "label": "Betting/Casino Gambling", "category": "betting_casino_gambling" },
  { "mcc": "5811", "label": "Caterers", "category": "caterers" },
  { "mcc": "8220", "label": "Colleges, Universities", "category": "colleges_universities" },
  { "mcc": "4411", "label": "Cruise Lines", "category": "cruise_lines" },
  { "mcc": "5812", "label": "Eating Places, Restaurants", "category": "eating_places_restaurants" },
  { "mcc": "7011", "label": "Hotels, Motels, and Resorts", "category": "hotels_motels_and_resorts" },
];

export default merchantCategoryCodes;
