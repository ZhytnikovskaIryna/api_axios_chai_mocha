const axios = require("axios");
const expect = require("chai").expect;
const token =
  "Bearer " +
  "sl.BwgySG-EbDFjmzkH2w6-5UFgA-4WgaWY8Xfo5SCmGltXctb6bolhgsWbKtii_DwPNsviS-hHGRCAmC1QjA37w6VS4Jd5FD0GkDxyLfWctmpYon3jJIgOlyocH9mdcZXMvi6YEAoHqtCWx4MFBC2t6Sk";

describe("Get file count", async () => {
  it("Test1", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/file_requests/count",
      null,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    expect(response.status).equals(200); //asserting if the response code is 200
  });
  /*
  it("Test2", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/delete_v2",
      {
        path: "/package.json",
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    expect(response.status).equals(200); //asserting if the response code is 200
  });
*/
  it("Upload file", async () => {
    const response = await axios.post(
      "https://content.dropboxapi.com/2/files/upload",
      "@file1.txt",
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/octet-stream",
          "Dropbox-API-Arg":
            '{"autorename": false,"mode": "add","mute": false,"path": "/file1.txt","strict_conflict": false }',
        },
      }
    );
    console.log(response.data);
    expect(response.status).equals(200); //asserting if the response code is 200
  });
});
