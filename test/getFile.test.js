const axios = require("axios");
const expect = require("chai").expect;

describe("Get file count", async () => {
  it("Test1", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/file_requests/count",
      {
        headers: {
          Authorization:
            "Bearer sl.BwffW0HGBPIXV_Cd6rxUzBH4hDIz66eHPA23BPARdvrSaVlnJ_eFh1c03fpYU7Wq7eGnUc1-rkOMyjsmO4v9uEomHPxak2jrFlUNyaeypBJU-2_2UNa9udn0pxkiaZDHuFetZAhlsJfxvkLrEvDHEn0",
        },
      }
    );
    console.log(response.data);
    expect(response.status).equals(200); //asserting if the response code is 200
  });
});
