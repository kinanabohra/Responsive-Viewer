import React, { useState, useEffect } from 'react';

const DeviceSettings = ({ onSetCustomSize, onClearCustomSize, customSize }) => {
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');

  useEffect(() => {
    if (!customSize) {
      setCustomWidth('');
      setCustomHeight('');
    }
  }, [customSize]);

  const handleApply = () => {
    const width = parseInt(customWidth, 10);
    const height = parseInt(customHeight, 10);

    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
      onSetCustomSize({ width, height });
    } else {
      alert("Please enter valid dimensions.");
    }
  };

  const handleClear = () => {
    setCustomWidth('');
    setCustomHeight('');
    onClearCustomSize();
  };

  return (
    <div className="device-settings">
      <h3 className="device-settings-title">Custom Device Size</h3>
      <input
        type="number"
        placeholder="Width (px)"
        value={customWidth}
        onChange={(e) => setCustomWidth(e.target.value)}
        className="device-settings-input"
      />
      <input
        type="number"
        placeholder="Height (px)"
        value={customHeight}
        onChange={(e) => setCustomHeight(e.target.value)}
        className="device-settings-input"
      />
      <button onClick={handleApply} className="apply-button">Apply</button>
      {(customWidth || customHeight) && (
        <button onClick={handleClear} className="cross-button">&times;</button>
      )}
    </div>
  );
};

export default DeviceSettings;
