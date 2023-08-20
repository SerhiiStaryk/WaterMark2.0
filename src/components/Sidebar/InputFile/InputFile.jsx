import './InputFile.css';
import uploadImg from '../../../assets/uploadImg.png';

const InputFile = ({ onChangeBackground, selectedFileName }) => (
  <div className="file-upload-container">
    <div className="file-upload">
      <img src={uploadImg} alt="upload" />
      <h3> {selectedFileName || "Click box to upload"}</h3>
      <input type="file" onChange={onChangeBackground} />
    </div>
  </div>
)

export default InputFile;