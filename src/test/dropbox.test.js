const axios = require("axios");
const expect = require("chai").expect;
const {
  SUCCESS_CODE,
  FILE_PATH,
  DELETE_FILE_BODY,
  UPLOAD_FILE_HEADERS,
  METADATA_FILE_HEADERS,
  METADATA_FILE_BODY,
  DELETE_FILE_HEADERS,
} = require("../resources/constants");
const instance = require("../api_client/api_client");

describe("Dropbox basic api testing", async () => {
  it("Upload file", async () => {
    const response = await instance.post(
      "https://content.dropboxapi.com/2/files/upload",
      FILE_PATH,
      UPLOAD_FILE_HEADERS
    );
    expect(response.headers["content-type"]).equals("application/json");
    expect(response.data.size).equals(34);
    expect(response.status).equals(SUCCESS_CODE);
  });
  it("Get file metadata", async () => {
    const response = await instance.post(
      "get_metadata",
      METADATA_FILE_BODY,
      METADATA_FILE_HEADERS
    );
    expect(response.headers["content-type"]).equals("application/json");
    expect(response.data.is_downloadable).equals(true);
    expect(response.status).equals(SUCCESS_CODE);
  });

  it("Delete file", async () => {
    const response = await instance.post(
      "delete_v2",
      DELETE_FILE_BODY,
      DELETE_FILE_HEADERS
    );
    expect(response.headers["x-frame-options"]).equals("SAMEORIGIN");
    expect(response.data.metadata.name).equals("file1.txt");
    expect(response.status).equals(SUCCESS_CODE);
  });
});
