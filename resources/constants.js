const constants={
    SUCCESS_CODE : 200,
    FILE_PATH : "@../resources/file1.txt",
    FILE_DELETE: "/file1.txt",
    UPLOAD_FILE:{
        "Content-Type": "application/octet-stream",
        "Dropbox-API-Arg":
          '{"autorename": false,"mode": "add","mute": false,"path": "/file1.txt","strict_conflict": false }',
      },
  
}

module.exports = constants;