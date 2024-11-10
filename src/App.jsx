import React, { useState } from 'react';
import Header from './components/Header';
import DeviceFrames from './components/DeviceFrames';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [customSize, setCustomSize] = useState(null);

  const deviceCategories = [
    {
      name: "Mobile Devices",
      devices: [
        { name: "iPhone SE", width: 375, height: 667 },
        { name: "iPhone 11/12/13", width: 390, height: 844 },
        { name: "iPhone 14 Pro Max", width: 430, height: 932 },
        { name: "Google Pixel 5", width: 393, height: 851 },
        { name: "Google Pixel 6 Pro", width: 412, height: 915 },
        { name: "Samsung Galaxy S21", width: 360, height: 800 },
        { name: "Samsung Galaxy S22 Ultra", width: 412, height: 915 },
        { name: "Surface Duo", width: 540, height: 720 },
        { name: "Samsung Galaxy Fold (Unfolded)", width: 1536, height: 2152 },
        { name: "iPhone 6/7/8", width: 375, height: 667 },
      ],
    },
  
    {
      name: "Tablet Devices",
      devices: [
        { name: "iPad Mini", width: 768, height: 1024 },
        { name: "iPad", width: 810, height: 1080 },
        { name: "iPad Pro 11", width: 834, height: 1194 },
        { name: "iPad Pro 12.9", width: 1024, height: 1366 },
        { name: "Samsung Galaxy Tab S8", width: 800, height: 1280 },
        { name: "Microsoft Surface Pro 8", width: 1280, height: 800 },
      ],
    },
  
    {
      name: "Laptop Devices",
      devices: [
        { name: "MacBook Air/Pro 13", width: 1280, height: 800 },
        { name: "MacBook Pro 14", width: 1512, height: 982 },
        { name: "MacBook Pro 16", width: 1536, height: 960 },
        { name: "Chromebook", width: 1366, height: 768 },
      ],
    },
  
    {
      name: "Desktop Devices",
      devices: [
        { name: "1080p Full HD", width: 1920, height: 1080 },
        { name: "2K", width: 2560, height: 1440 },
        { name: "4K", width: 3840, height: 2160 },
        { name: "1366 x 768 (Standard Desktop)", width: 1366, height: 768 },
        { name: "1600 x 900 (Standard Desktop)", width: 1600, height: 900 },
      ],
    },
  ];


  const handleUrlChange = (inputUrl) => {
    setUrl(inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`);
  };

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
    setCustomSize(null);
  };

  const handleSetCustomSize = (size) => {
    setCustomSize(size);
    setSelectedDevice(null);
  };

  const handleClearCustomSize = () => {
    setCustomSize(null);
  };

  return (
    <div className="app">
      <Header
        url={url}
        onUrlChange={handleUrlChange}
        deviceCategories={deviceCategories}
        selectedDevice={selectedDevice}
        onSelectDevice={handleSelectDevice}
        customSize={customSize}
        onSetCustomSize={handleSetCustomSize}
        onClearCustomSize={handleClearCustomSize}
      />
      <DeviceFrames
        url={url}
        selectedDevice={selectedDevice}
        customSize={customSize}
      />
      <Footer />
    </div>
  );
};

export default App;
