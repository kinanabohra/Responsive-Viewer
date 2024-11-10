import React from 'react';
import DeviceSelector from './DeviceSelector';
import DeviceSettings from './DeviceSettings';

const Header = ({ url, onUrlChange, deviceCategories, selectedDevice, onSelectDevice, customSize, onSetCustomSize, onClearCustomSize }) => {
  return (
    <div className="header">
      <div className='header-upperDiv'>
        <h1 className='h1-title'>Responsive Viewer</h1>
        <div className='url-div'>
          <label htmlFor="url">Enter URL</label>
          <input
            id='url'
            type="text"
            placeholder="e.g., https://example.com"
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
            className="url-input"
          />
        </div>
      </div>
      <div className='header-lowerDiv'>
          <DeviceSelector
            deviceCategories={deviceCategories}
            selectedDevice={selectedDevice}
            onSelectDevice={onSelectDevice}
          />      
          <DeviceSettings
            customSize={customSize}
            onSetCustomSize={onSetCustomSize}
            onClearCustomSize={onClearCustomSize}
          />
      </div>
    </div>
  );
};

export default Header;
