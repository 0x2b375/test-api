const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 3001;
require("dotenv").config();
const app = express();
app.use(express.json());

const loginUrl = process.env.LOGIN_URL;
// const deviceUrl = process.env.DEVICE_URL;
const devicesMononetUrl = process.env.DEVICESMONONET_URL;

const loginPayload = {
  username: process.env.LOGIN_USERNAME,
  password: process.env.LOGIN_PASSWORD,
};

const companyIdPayload = {
  company_id: process.env.COMPANY_ID,
};

app.use(cors());

app.post("/api/devices", async (req, res) => {
  try {
    const loginResponse = await axios.post(loginUrl, loginPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const accessToken = loginResponse.data.tokens.access;
    
    const deviceResponse = await axios.post(devicesMononetUrl, companyIdPayload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/json',
      },
    });

    res.json(deviceResponse.data)
    
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
