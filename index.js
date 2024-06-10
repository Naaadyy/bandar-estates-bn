// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock data
const houses = [
  { id: '1', name: 'Lumapas', type: '2-storey Detached House', priceRange: 'BND 500,000 - 600,000', address: '123 Street, Brunei', locationLink: 'https://maps.google.com', openingHours: '10:30am-5pm', overviewText: 'Lovely 2-storey house...', keyFeatures: '3 bedrooms, 2 bathrooms...' },
  // more houses...
];

// Define a route to get house by ID
app.get('/houses/:id', (req, res) => {
  const house = houses.find(h => h.id === req.params.id);
  if (house) {
    res.json(house);
  } else {
    res.status(404).send('House not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
