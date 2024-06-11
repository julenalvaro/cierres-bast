// PATH: src/components/MainScreen.jsx

import { useState } from 'react';
import FileUpload from './FileUpload';
import ErrorScreen from './ErrorScreen';
import DownloadButton from './DownloadButton';

const MainScreen = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [error, setError] = useState(null);

  const handleUploadSuccess = (data) => {
    setUploadSuccess(true);
    setUploadedFileUrl(`http://localhost:3001/uploads/${data.filename}`);
    setError(null);
  };

  const handleUploadError = (error) => {
    console.error('Upload error:', error);
    setUploadSuccess(false);
    setError(error?.message || error || 'Unknown error');
  };

  return (
    <div>
      {error ? (
        <ErrorScreen message={error} />
      ) : (
        <>
          <FileUpload onUploadSuccess={handleUploadSuccess} onUploadError={handleUploadError} />
          {uploadSuccess && <DownloadButton fileUrl={uploadedFileUrl} />}
        </>
      )}
    </div>
  );
};

export default MainScreen;
