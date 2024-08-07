import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      <div className="mb-4">
        <a href="#" className="text-white mx-2">About Us</a>
        <a href="#" className="text-white mx-2">Contact Us</a>
      </div>
      <div className="mb-4">
        <a href="#" className="text-white mx-2">LinkedIn</a>
        <a href="#" className="text-white mx-2">Facebook</a>
        <a href="#" className="text-white mx-2">Instagram</a>
        <a href="#" className="text-white mx-2">Twitter</a>
      </div>
      <div>
        &copy; 2024 Careersight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
