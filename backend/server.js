const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const myLocation = {
  latitude: 46.056946,  
  longitude: 14.505751  
};

app.get('/location', (req, res) => {
  res.json(myLocation);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
