import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

export default function Check() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    console.log(selectedFile);
    formData.append("image", selectedFile, selectedFile.name);
    console.log(formData);
    try {
      axios
        .post("https://mlmodellungbot.herokuapp.com/", formData)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}
