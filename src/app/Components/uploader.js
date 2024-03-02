import React, { useState } from "react";
import Image from "next/image";
import BtnIcon from "/public/assets/btnicon.svg";
import axios from "axios";
import Loader from "./loader";

function Uploader() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const convertHeicToJpgApiCall = async (formData) => {
    try {
      const response = await axios.post(
        "https://api.heic-to-jpg.moonsys.co/api/heic/heic-to-jpg",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
          responseType: "blob", // Set response type to blob
        }
      );

      // Create a temporary URL to download the file
      const url = window.URL.createObjectURL(response.data);
      // Create an anchor element and programmatically click it to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "Converted-doc"; // Set the desired file name and extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Release the temporary URL
      window.URL.revokeObjectURL(url);

      setLoadingComplete(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoadingComplete(false);
    }
  };

  const onChangeHandler = async (event) => {
    const selectedFiles = event.target.files;
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    if (selectedFiles) {
      setLoadingComplete(true);
      try {
        const formData = new FormData();
        formData.append("images", selectedFile);

        await convertHeicToJpgApiCall(formData);
        formData.delete("images");
      } catch (error) {
        console.error("Error converting file:", error);
      }
    }
  };

  return (
    <>
      {loadingComplete && <Loader />}

      <div>
        <div
          className="flex flex-col p-4"
          style={{ marginLeft: "20%", marginRight: "20%" }}
        >
          <button
            className="rounded bg-[#FF5A5F] px-6 py-4 self-center"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <div className="flex gap-3 items-center">
              <Image
                priority
                width={30}
                height={30}
                src={BtnIcon}
                alt="Btn-Icon"
              />
              <span className="text-white">Datei auswählen</span>
            </div>
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept=".heic"
            onChange={onChangeHandler}
            multiple
          />
        </div>
      </div>
    </>
  );
}

export default Uploader;
