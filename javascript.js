const express = require('express');
const app = express();
const port = 3000;

let adminLocation = { lat: null, lng: null };

// Omogoči obravnavanje JSON podatkov v zahtevah
app.use(express.json());

// API endpoint za posodobitev adminove lokacije
app.post('/update-location', (req, res) => {
  const { lat, lng } = req.body;
  if (lat && lng) {
    adminLocation = { lat, lng };
    res.status(200).send('Lokacija posodobljena');
  } else {
    res.status(400).send('Neveljavni podatki o lokaciji');
  }
});

// API endpoint za pridobivanje adminove lokacije
app.get('/get-location', (req, res) => {
  res.status(200).json(adminLocation);
});

app.listen(port, () => {
  console.log(`API teče na http://localhost:${port}`);
});
