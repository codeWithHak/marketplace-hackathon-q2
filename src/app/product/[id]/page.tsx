'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { useCounter } from '../../contexts/CartCounter'
import toast from 'react-hot-toast'
import { Star, StarHalf, Minus, Plus, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

interface Product {
  _id: string
  name: string
  image: any
  category: string
  price: number
  originalPrice?: number
  description: string
  badge?: {
    text: string
    color: string
  }
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState('L')
  const [selectedColor, setSelectedColor] = useState('purple')
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { addToCart, getCartCount } = useCounter()

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id][0]`
      const fetchedProduct = await client.fetch(query, { id })
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: urlFor(product.image).url()  
      })
      getCartCount()
      toast.success(`${product.name} added to cart`, {
        style: {
          background: '#B88E2F',
          color: '#fff',
        },
      })
    }
  }

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="w-[85%] max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Product Image */}
        <div className="lg:w-1/2 bg-[#FFF9F3] rounded-lg p-8">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-medium mb-6">{product.name}</h1>
          <p className="text-3xl font-medium mb-6">Rs. {product.price.toLocaleString()}.00</p>
          
          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-400">
              <Star className="fill-current" size={20} />
              <Star className="fill-current" size={20} />
              <Star className="fill-current" size={20} />
              <Star className="fill-current" size={20} />
              <StarHalf className="fill-current" size={20} />
            </div>
            <span className="text-gray-600">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg mb-3">Size</h3>
            <div className="flex gap-4">
              {['L', 'XL', 'XS'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors
                    ${selectedSize === size 
                      ? 'bg-[#B88E2F] text-white' 
                      : 'bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="text-lg mb-3">Color</h3>
            <div className="flex gap-4">
              {[
                { name: 'purple', class: 'bg-purple-500' },
                { name: 'black', class: 'bg-black' },
                { name: 'brown', class: 'bg-[#B88E2F]' }
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} transition-transform
                    ${selectedColor === color.name ? 'scale-125 ring-2 ring-offset-2 ring-gray-300' : ''}
                  `}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center border rounded-lg">
              <button 
                onClick={() => handleQuantityChange('decrease')}
                className="px-4 py-2 hover:bg-gray-100"
              >
                <Minus size={20} />
              </button>
              <span className="px-6 py-2">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="px-4 py-2 hover:bg-gray-100"
              >
                <Plus size={20} />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="px-8 py-2 bg-white border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors rounded-lg"
            >
              Add To Cart
            </button>
            
          </div>

          {/* Product Meta */}
          <div className="border-t pt-6 space-y-4 text-gray-600">
            <div className="flex gap-8">
              <span className="w-24">SKU</span>
              <span>: SS001</span>
            </div>
            <div className="flex gap-8">
              <span className="w-24">Category</span>
              <span>: {product.category}</span>
            </div>
            <div className="flex gap-8">
              <span className="w-24">Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-8">
              <span className="w-24">Share</span>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-[#B88E2F]">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="hover:text-[#B88E2F]">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="hover:text-[#B88E2F]">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

