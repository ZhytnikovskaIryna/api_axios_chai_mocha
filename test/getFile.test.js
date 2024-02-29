const axios = require("axios");
const expect = require("chai").expect;
const token =
  "Bearer " +
  "sl.BwgOe-rQOxBGOBkUlcBqeo_CdPWYrjJSpdQAtaklG42hTbtWnvZyO7i5GAay1tBSdJ8ZyKxVVEns6UFDTj38q0lSF0wB--pAF495hlQrK3Hw2iJEBKOYBnA3_JbBlMBy6NtG-cJM85wUPucfqDnOn74";

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
