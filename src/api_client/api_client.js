const axios = require("axios");
const { BASE_URL } = require("./api_data");
const jsonData = require("../../env.json");

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${jsonData.TOKEN}`,
  },
});

module.exports = instance;
