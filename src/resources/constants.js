const constants = {
  SUCCESS_CODE: 200,
  FILE_CONTENT: "Text for  file  content",
  FILE_SIZE: 23,
  UPLOAD_FILE_HEADERS: {
    headers: {
      "Content-Type": "application/octet-stream",
      "Dropbox-API-Arg":
        '{"autorename": false,"mode": "add","mute": false,"path": "/file1.txt","strict_conflict": false }',
    },
  },
  METADATA_FILE_HEADERS: {
    headers: {
      "Content-Type": "application/json",
    },
  },
  METADATA_FILE_BODY: {
    include_deleted: false,
    include_has_explicit_shared_members: false,
    include_media_info: false,
    path: "id:56v14Z_nSYcAAAAAAAAACg",
  },
  DELETE_FILE_HEADERS: {
    headers: {
      "Content-Type": "application/json",
    },
  },
  DELETE_FILE_BODY: {
    path: "/file1.txt",
  },
};

module.exports = constants;
