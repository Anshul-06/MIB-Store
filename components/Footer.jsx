import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🇮🇳</span>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent">
                MIB Store
              </h1>
              <p className="text-xs text-gray-500">Made in Bharat</p>
            </div>
          </div>
          <p className="mt-6 text-sm">
            Discover authentic Made in India products. We are committed to supporting local businesses 
            and promoting Atmanirbhar Bharat. Every purchase helps Indian artisans, manufacturers, 
            and entrepreneurs grow their businesses.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91-9999-999-999</p>
              <p>contact@mibstore.in</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © MIB Store - Made in Bharat. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;