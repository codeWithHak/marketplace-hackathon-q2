'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center sm:space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold">
              Shop
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex md:items-center sm:space-x-9">
          <Link href="/search" className="text-gray-800 hover:text-gray-600">
              <Image src="/images/account-icon.png" alt="Search" width={22} height={22} quality={100}/>
            </Link>
            <Link href="/search" className="text-gray-800 hover:text-gray-600">
              <Image src="/images/search-icon.png" alt="Search" width={22} height={22} quality={100}/>
            </Link>
            <Link href="/account" className="text-gray-800 hover:text-gray-600">
              <Image src="/images/heart-icon.png" alt="Account" width={22} height={22} quality={100}/>
            </Link>
            <Link href="/cart" className="text-gray-800 hover:text-gray-600">
              <Image src="/images/cart-icon.png" alt="Cart" width={22} height={22} quality={100}/>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'absolute ' : 'hidden'} pt-12 md:hidden top-0 bg-white z-20 h-[50%] w-[80%]`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600">
            Shop
          </Link>
          <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4 px-4 py-1 ">
          <Link href="/account" className="block text-gray-800 hover:text-gray-600">
            <Image src="/images/account-icon.png" alt="Account" width={24} height={24} />
          </Link>
          <Link href="/cart" className="block text-gray-800 hover:text-gray-600">
            <Image src="/images/cart-icon.png" alt="Cart" width={24} height={24} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

