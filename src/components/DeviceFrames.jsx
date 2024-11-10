import React from 'react';
import logo from '../assets/banner.png';

const DeviceFrames = ({ url, selectedDevice, customSize }) => {
  const devices = [
    { name: "iPhone SE (Older models)", width: 320, height: 480 },
    { name: "Standard Android Phone", width: 360, height: 640 },
    { name: "iPhone 6/7/8", width: 375, height: 667 },
    { name: "iPhone 12 Mini", width: 390, height: 844 },
    { name: "iPhone XR/11/11 Pro Max", width: 414, height: 896 },
    { name: "iPhone 12 Pro Max/13 Pro Max", width: 428, height: 926 },
    { name: "Older Android Phone", width: 480, height: 800 },
    { name: "Small Tablet (Kindle Fire)", width: 600, height: 1024 },
    { name: "Large Phone/Older Tablet", width: 720, height: 1280 },
    { name: "iPad Mini/Older iPads (Portrait)", width: 768, height: 1024 },
    { name: "Standard Android Tablet", width: 800, height: 1280 },
    { name: "iPad Air", width: 834, height: 1112 },
    { name: "iPad Pro 11-inch", width: 834, height: 1194 },
    { name: "iPad Pro 12.9-inch", width: 1024, height: 1366 },
    { name: "Budget/Older Laptop", width: 1366, height: 768 },
    { name: "MacBook Air", width: 1440, height: 900 },
    { name: "14-inch Laptop", width: 1536, height: 864 },
    { name: "Standard HD Laptop", width: 1920, height: 1080 },
    { name: "QHD High-End Laptop", width: 2560, height: 1440 },
    { name: "MacBook Pro 15-inch", width: 2880, height: 1800 },
    { name: "4K Laptop", width: 3840, height: 2160 },
    { name: "HD Monitor", width: 1280, height: 720 },
    { name: "Full HD Monitor", width: 1920, height: 1080 },
    { name: "QHD Monitor", width: 2560, height: 1440 },
    { name: "4K Monitor", width: 3840, height: 2160 },
    { name: "5K Display", width: 5120, height: 2880 },
    { name: "8K Display", width: 7680, height: 4320 },
    { name: "Ultra-Wide Full HD", width: 2560, height: 1080 },
    { name: "Ultra-Wide QHD", width: 3440, height: 1440 },
    { name: "Ultra-Wide WQHD", width: 3840, height: 1600 },
    { name: "Dual QHD Ultra-Wide", width: 5120, height: 1440 }
  ];

  const displayDevices = customSize
    ? [{ name: 'Custom Size', ...customSize }]
    : selectedDevice
    ? [selectedDevice]
    : devices;

  if (!url || url.trim() === '') {
    return (
      <div className="logo-background">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
    );
  }
  
  return (

    <div className="device-frames-container">
      {displayDevices.map((device) => (
        <div key={device.name} className="device-frame">
          <h3 className="device-name">
            {device.name} - {device.width} x {device.height}
          </h3>
          <iframe
            title={device.name}
            src={url}
            width={device.width}
            height={device.height}
            className="device-iframe"
          />
        </div>
      ))}
    </div>
  );
};

export default DeviceFrames;
