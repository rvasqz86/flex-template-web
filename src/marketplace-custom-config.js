/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'Kitchen Available',
    label: 'Kitchen Available',
  },
  {
    key: 'staff',
    label: 'Staff',
  },
  {
    key: 'silverware',
    label: 'Silverware',
  },
  {
    key: 'glassware',
    label: 'Glassware',
  },
  {
    key: 'bar',
    label: 'Bar',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
];

export const categories = [
  { key: 'Casual Dining', label: 'Casual Dining' },
  { key: 'Family Style', label: 'Family Style' },
  { key: 'Fine Dining', label: 'Fine Dining' },
  { key: 'Fast Casual', label: 'Fast Casual' },
  { key: 'Quick Serve', label: 'Quick Serve' }
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
