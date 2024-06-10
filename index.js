const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Basic routing for homepage, about section, and wine list page
app.get('/', (req, res) => {
  res.send('Welcome to Side Hustle Wines!');
});

app.get('/about', (req, res) => {
  res.send('About Side Hustle Wines: A low-intervention wine bar in Seattle, WA.');
});

app.get('/wine-list', (req, res) => {
  res.send('Wine List: Showcasing low-intervention wines from Washington State.');
});

// Start the server
app.listen(port, () => {
  console.log(`Side Hustle Wines website listening at http://localhost:${port}`);
});
