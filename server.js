const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Use middleware to parse JSON
app.use(bodyParser.json());

// Endpoint for receiving FACEIO events
app.post('/faceio-webhook', (req, res) => {
  // Handle the FACEIO event data here
  console.log('Received FACEIO Event:', req.body);

  // Send a response (you can customize this based on your needs)
  res.status(200).send('Event Received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
