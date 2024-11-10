import React from 'react';

const DeviceSelector = ({ deviceCategories, onSelectDevice, selectedDevice }) => {
  return (
    <div className="device-selector">
      <h3 className="device-selector-title">Select a Device</h3>
      <select
        onChange={(e) => onSelectDevice(
          deviceCategories
            .flatMap(category => category.devices)
            .find(device => device.name === e.target.value)
        )}
        value={selectedDevice ? selectedDevice.name : ''}
        className="device-dropdown"
      >
        <option value="">Select a Device</option>
        {deviceCategories.map((category) => (
          <optgroup key={category.name} label={category.name}>
            {category.devices.map((device) => (
              <option key={device.name} value={device.name}>
                {device.name} - {device.width} x {device.height}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      {selectedDevice && (
        <button
          onClick={() => onSelectDevice(null)}
          className="cross-button"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default DeviceSelector;
