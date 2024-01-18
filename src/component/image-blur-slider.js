import React, { useState } from 'react';

const ImageBlurSlider = () => {
  const [blurValue, setBlurValue] = useState(0);

  const handleSliderChange = (event) => {
    setBlurValue(event.target.value);
  };

  const imageStyle = {
    filter: `blur(${blurValue}px)`,
    transition: 'filter 0.6s ease-in-out', // Adjust the duration as needed

  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Image Blur Slider</h2>
      <input
        type="range"
        min="0"
        max="10"
        value={blurValue}
        onChange={handleSliderChange}
      />
      <div style={{ margin: '20px' }}>
        <img
          src="/photo.jpg" // Replace with your image URL
          alt="Blurred content"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default ImageBlurSlider;
