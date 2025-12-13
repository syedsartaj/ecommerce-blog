'use client'

import { useState } from 'react'
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronDown } from 'lucide-react'

const categories = [
  'Electronics',
  'Fashion',
  'Home & Living',
  'Beauty & Health',
  'Sports & Fitness',
  'Kitchen & Dining',
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <p className="hidden sm:block">
              Free shipping on orders over $50 | 30-day money-back guarantee
            </p>
            <p className="sm:hidden">Free shipping over $50</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-emerald-400 transition-colors">
                Track Order
              </button>
              <button className="hover:text-emerald-400 transition-colors">
                Help
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="font-playfair text-2xl font-bold text-gray-900">
                SHOPWISE
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {categories.map((category) => (
                      <a
                        key={category}
                        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Blog
              </a>
              <a href="/reviews" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Reviews
              </a>
              <a href="/deals" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Deals
              </a>
              <a href="/guides" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Buying Guides
              </a>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2 animate-slideIn">
                  <input
                    type="text"
                    placeholder="Search products, articles..."
                    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Search */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Account */}
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button className="relative p-2 hover:bg-emerald-50 rounded-lg transition-colors group">
              <ShoppingCart className="w-5 h-5 group-hover:text-emerald-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="pb-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search products, articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Categories
                </p>
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a href="/blog" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Blog
                </a>
                <a href="/reviews" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Reviews
                </a>
                <a href="/deals" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Deals
                </a>
                <a href="/guides" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Buying Guides
                </a>
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a href="/account" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                  My Account
                </a>
                <a href="/wishlist" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                  Wishlist (3)
                </a>
                <a href="/track-order" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                  Track Order
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
