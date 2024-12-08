import Image from 'next/image'
import { ChevronRight, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Cart() {
  return (
<>
<div className="relative h-[300px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Cart</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
        {/* Cart Items */}
        <div className="space-y-4">
          {/* Header */}
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 p-4 bg-[#FFF9F3] text-sm md:text-base">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div></div>
          </div>

          {/* Cart Item */}
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 items-center p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 bg-[#FFF9F3] rounded-lg overflow-hidden">
                <Image
                  src="/images/sofa-black.png"
                  alt="Asgaard sofa"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <span className="text-sm md:text-base">Asgaard sofa</span>
            </div>
            <div className="text-sm md:text-base">Rs. 250,000.00</div>
            <div>
              <input
                type="number"
                value="1"
                min="1"
                className="w-16 p-2 border rounded-md text-center text-sm md:text-base"
              />
            </div>
            <div className="text-sm md:text-base">Rs. 250,000.00</div>
            <button className="text-gray-500 hover:text-gray-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#FFF9F3] p-6 rounded-lg h-fit">
          <h2 className="text-xl md:text-2xl font-medium mb-6">Cart Totals</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base">Subtotal</span>
              <span className="text-sm md:text-base">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm md:text-base">Total</span>
              <span className="text-[#B88E2F] text-sm md:text-base">Rs. 250,000.00</span>
            </div>
          </div>
          <button 
            
            className="w-full text-sm md:text-base"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

