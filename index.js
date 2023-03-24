const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define the route for the webhook endpoint
app.post('/webhook', (req, res) => {
  // Log the incoming request for testing purposes
  console.log('Received request:', req.body);

  // Respond with some test data
  res.json({ message: 'Mock webhook received' });
});

// Start the server
app.listen(port, () => {
  console.log(`Mock webhook listening at http://localhost:${port}`);
});

