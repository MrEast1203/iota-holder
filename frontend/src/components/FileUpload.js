import { useState } from "react";
import instance from "../api";
import downloadFile from "../downloadFileAPI";
import FileDownload from "js-file-download";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    let formData = new FormData();
    console.log("file", file);
    formData.append("file", file);
    console.log(formData);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    instance
      .post("/uploadFile", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDownloadClick = async () => {
    downloadFile
      .get("/downloadSH", { params: { name: "kan-test2" } })
      .then((res) => {
        console.log(res);
        FileDownload(res.data, "kan-test2.hodl");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
      <button onClick={handleDownloadClick}>Download</button>
    </div>
  );
};

export default FileUpload;
