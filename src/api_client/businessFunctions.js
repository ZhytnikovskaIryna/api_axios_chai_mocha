const postApi = require("../api_client/api_client");
const {
  FILE_CONTENT,
  DELETE_FILE_BODY,
  UPLOAD_FILE_HEADERS,
  METADATA_FILE_HEADERS,
  METADATA_FILE_BODY,
  DELETE_FILE_HEADERS,
} = require("../resources/constants");

exports.fileMetaData = async () => {
  return await postApi(
    "get_metadata",
    METADATA_FILE_BODY,
    METADATA_FILE_HEADERS
  );
};

exports.uploadFile = async () => {
  return await postApi(
    "https://content.dropboxapi.com/2/files/upload",
    FILE_CONTENT,
    UPLOAD_FILE_HEADERS
  );
};
exports.deleteFile = async () => {
  return await postApi("delete_v2", DELETE_FILE_BODY, DELETE_FILE_HEADERS);
};
