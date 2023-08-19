import { useState } from 'react';
import './InputFile.css';
import uploadImg from '../../../assets/uploadImg.png';

const InputFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload">
        <img src={uploadImg} alt="upload" />
        <h3> {selectedName || "Click box to upload"}</h3>
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default InputFile;