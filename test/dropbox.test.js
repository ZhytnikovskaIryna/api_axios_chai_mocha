const axios = require("axios");
const expect = require("chai").expect;
const jsonData = require('../env.json');
const {SUCCESS_CODE,FILE_PATH,FILE_DELETE} = require('../resources/constants');
const instance=require('../api_client/api_client')

//const token="Bearer " +jsonData.TOKEN;

describe("Dropbox basic api testing", async () => {
 /* it("Upload file", async () => {
    const response = await axios.post(
      "https://content.dropboxapi.com/2/files/upload",
      FILE_PATH,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/octet-stream",
          "Dropbox-API-Arg":
            '{"autorename": false,"mode": "add","mute": false,"path": "/file1.txt","strict_conflict": false }',
        },
      }
    );
    expect(response.headers['content-type']).equals('application/json');
    expect(response.data.size).equals(23);
    expect(response.status).equals(SUCCESS_CODE); 
  });*/
  it("Get file metadata", async () => {

    
    const response = await instance.post(
      "get_metadata",
      {
        include_deleted: false,
        include_has_explicit_shared_members: false,
        include_media_info: false,
        path: "id:56v14Z_nSYcAAAAAAAAACg",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  /*  const response = await axios.post(
      "https://api.dropboxapi.com/2/files/get_metadata",
      {
        include_deleted: false,
        include_has_explicit_shared_members: false,
        include_media_info: false,
        path: "id:56v14Z_nSYcAAAAAAAAACg",
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
*/
    expect(response.headers['content-type']).equals('application/json');
    expect(response.data.is_downloadable).equals(true);
    expect(response.status).equals(SUCCESS_CODE); 
  });

 /* it("Delete file", async () => {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/delete_v2",
      {
        path: FILE_DELETE,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    expect(response.headers['x-frame-options']).equals('SAMEORIGIN');
    expect(response.data.metadata.name).equals('file1.txt');
    expect(response.status).equals(SUCCESS_CODE); 
  });
  */
});
