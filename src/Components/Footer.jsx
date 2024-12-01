import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024Sourabhroy. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/services" className="hover:text-blue-400">Services</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
