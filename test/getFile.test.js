const axios = require("axios");
const expect = require("chai").expect;
const token =
  "Bearer " +
  "sl.Bwssgko4TOYuBj3YoJE4D7B5bKMm-AqgyHS8swj2NphUL67TY6AFUjBuTdG1rJeKh3sKThn_yCZ8pJJoMeJTuvuduAASnJsnYSklTyGF-CqI2cP2jUsUKyKDAD_J9iTSnBowRz-pDzpC5FL5JrhtzQg";

describe("Dropbox basic api testing", async () => {
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
  it("Get file metadata", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/get_metadata",
      {
        include_deleted: false,
        include_has_explicit_shared_members: false,
        include_media_info: false,
        path: "id:UGCBj4DAw-oAAAAAAAAACw",
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

  it("Delete file", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/delete_v2",
      {
        path: "/file1.txt",
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
});
