// PATH: src/components/FileUpload.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const FileUpload = ({ onUploadSuccess, onUploadError }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError(null);
  };

  const handleUpload = async () => {
    if (file) {
      console.log('Uploading file:', file.name);
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Upload successful:', response.data);
        onUploadSuccess(response.data);
      } catch (error) {
        console.error('Upload failed:', error);
        if (error.response && error.response.data) {
          onUploadError(error.response.data.error || 'Upload failed');
        } else {
          onUploadError(error.message || 'Upload failed');
        }
      }
    } else {
      setError('Please select a file to upload.');
    }
  };

  return (
    <div>
      <TextField type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

FileUpload.propTypes = {
  onUploadSuccess: PropTypes.func.isRequired,
  onUploadError: PropTypes.func.isRequired,
};

export default FileUpload;

