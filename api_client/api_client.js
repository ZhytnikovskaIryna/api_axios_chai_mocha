const axios = require("axios");
//const {BASE_URL} = require("./api_data");
const jsonData = require('../env.json');

const instance = axios.create({
    baseURL:"https://api.dropboxapi.com/2/files/",
    timeout: 3000,
    headers: {
        Authorization: `Bearer ${jsonData.TOKEN}`
    }
});

module.exports = instance;


