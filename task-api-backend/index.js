const express = require("express");
const axios = require('axios');
const cors = require('cors');
const port = 3001;
require('dotenv').config();
const app = express();
app.use(express.json());

const loginUrl = process.env.LOGIN_URL;
const deviceUrl = process.env.DEVICE_URL;
const loginPayload = {
  username: process.env.LOGIN_USERNAME,
  password: process.env.LOGIN_PASSWORD,
};


app.use(cors());

app.post('/api/devices', async (req, res) => {
  const loginResponse = await axios.post(loginUrl, loginPayload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const accessToken = loginResponse.data.tokens.access;
  const deviceResponse = await axios.post(deviceUrl, {}, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    },
  });
  res.json(deviceResponse.data)
})




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

