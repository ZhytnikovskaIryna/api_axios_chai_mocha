const axios = require("axios");
const expect = require("chai").expect;
const { SUCCESS_CODE, FILE_SIZE } = require("../resources/constants");
const {
  uploadFile,
  fileMetaData,
  deleteFile,
} = require("../api_client/businessFunctions");

describe("Dropbox basic api testing", async () => {
  it("Upload file", async () => {
    const response = await uploadFile();
    expect(response.headers["content-type"]).equals("application/json");
    expect(response.data.size).equals(FILE_SIZE);
    expect(response.status).equals(SUCCESS_CODE);
  });
  it("Get file metadata", async () => {
    const response = await fileMetaData();
    expect(response.headers["content-type"]).equals("application/json");
    expect(response.data.is_downloadable).equals(true);
    expect(response.status).equals(SUCCESS_CODE);
  });

  it("Delete file", async () => {
    const response = await deleteFile();
    expect(response.headers["x-frame-options"]).equals("SAMEORIGIN");
    expect(response.data.metadata.name).equals("file1.txt");
    expect(response.status).equals(SUCCESS_CODE);
  });
});
