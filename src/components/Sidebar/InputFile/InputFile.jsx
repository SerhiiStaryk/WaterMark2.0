/* eslint-disable react/prop-types */
import React from 'react';

import uploadImg from '../../../assets/uploadImg.png';

import classes from './InputFile.module.css';

const InputFile = ({ onChangeBackground, selectedFileName }) => (
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
        className={classes.file}
        onChange={onChangeBackground}
      />
    </div>
  </div>
);

export default InputFile;
