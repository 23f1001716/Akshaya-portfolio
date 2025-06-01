
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2" style={{ color: '#F4D35E' }}>
              Akshaya Muvva
            </h3>
            {/* <p style={{ color: '#E5E5E5' }}>B.Tech Computer Science & Engineering Student</p> */}
          </div>
          
          {/* <div className="flex items-center justify-center space-x-2 mb-6" style={{ color: '#E5E5E5' }}>
            <span>Made with</span>
            <Heart className="w-5 h-5 animate-pulse" style={{ color: '#B68973' }} />
            <span>and</span>
            <Code className="w-5 h-5" style={{ color: '#F4D35E' }} />
            <span>by Akshaya Muvva</span>
          </div> */}
          
          <div className="border-t pt-6" style={{ borderTopColor: '#2D2D2D' }}>
            <p style={{ color: '#B68973' }}>
              © 2024 Akshaya Muvva. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
