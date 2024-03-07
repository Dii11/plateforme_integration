import React, { useState } from 'react';

function UploadImage() {
  const [imageName, setImageName] = useState('Photo de profil');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageName(file.name);
    } else {
      setImageName('Photo de profil');
    }
  };

    return (
        <div style={{ width: '100%' }}>
            <input
                type="file"
                id="img"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
                <label
                    htmlFor="img" className="inputImg"
                    style={{ color: imageName == 'Photo de profil' ? '#515151' : 'black' }}>
                {imageName}
            </label>
        </div>
    );
}

export default UploadImage;