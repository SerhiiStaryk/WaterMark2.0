/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import uploadImg from '../../../assets/uploadImg.png';
import { AppContext } from '../../../store/app-context';

import classes from './InputFile.module.css';

const InputFile = () => {
  const { selectedFileName, setImage } = useContext(AppContext);

  return (
    <div className={classes['file-upload-container']}>
      <div className={classes['file-upload']}>
        <img
          src={uploadImg}
          alt="upload"
          className={classes['upload-img']}
        />
        <h3 className={classes['file-name']}>
          {selectedFileName || 'Вибрати файл:'}
        </h3>
        <input
          type="file"
          onChange={setImage}
          className={classes.file}
        />
      </div>
    </div>
  );
};

export default InputFile;
