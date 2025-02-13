import React from 'react'
import './index.css'

function UploadPhoto({onImageUpload}) {
  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      onImageUpload(file)
    }
  }

  return (
    <div>
      <label htmlFor="file-upload" className="file-upload-label">
        Upload Photo
      </label>
      <br />
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <br />
    </div>
  )
}

export default UploadPhoto
