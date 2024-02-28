const axios = require("axios");
const expect = require("chai").expect;

describe("Get file count", async () => {
  it("Test1", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/file_requests/count",
      {
        headers: {
          Authorization:
            "Bearer sl.Bwfm1wBKbDNixxQz_uPbIGWWOnBvYALULhTqhwNMZIresWeyLY8HaWDciv98y-UuUXxnYuHHXCPkrkafh9rx9m2-MVh-xpOascf-ZGAWg1GJn0b0ELuZ_Fs9CkodxUO_MT2v2lNEKqa3plt5cVPcdiU",
        },
      }
    );
    console.log(response.data);
    expect(response.status).equals(200); //asserting if the response code is 200
  });
});
