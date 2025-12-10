"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {

  const { isSeller, router, getCartCount } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <div 
        className="cursor-pointer flex items-center gap-2"
        onClick={() => router.push('/')}
      >
        <span className="text-2xl">🇮🇳</span>
        <div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 via-gray-700 to-green-600 bg-clip-text text-transparent">
            MIB Store
          </h1>
          <p className="text-xs text-gray-500">Made in Bharat</p>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <SignedIn>
          <Link href="/my-orders" className="hover:text-gray-900 transition">
            My Orders
          </Link>
        </SignedIn>
        <Link href="/about-us" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Link href="/search" title="Search">
          <Image className="w-4 h-4 cursor-pointer hover:opacity-70 transition" src={assets.search_icon} alt="search icon" />
        </Link>
        
        <SignedIn>
          <Link href="/my-orders" className="relative hover:opacity-70 transition" title="My Orders">
            <Image className="w-5 h-5" src={assets.box_icon} alt="orders" />
          </Link>
          <Link href="/cart" className="relative" title="Cart">
            <Image className="w-5 h-5" src={assets.cart_icon} alt="cart" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-sm hover:text-gray-900 transition">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        
        <SignedIn>
          <Link href="/my-orders" className="relative">
            <Image className="w-5 h-5" src={assets.box_icon} alt="orders" />
          </Link>
          <Link href="/cart" className="relative">
            <Image className="w-5 h-5" src={assets.cart_icon} alt="cart" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center gap-2 hover:text-gray-900 transition">
              <Image src={assets.user_icon} alt="user icon" />
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;