import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="font-playfair text-2xl font-bold text-white">
                SHOPWISE
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted source for honest product reviews, expert buying guides, and the latest deals.
              We help you shop smarter and save money.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="/category/electronics" className="hover:text-emerald-400 transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="/category/fashion" className="hover:text-emerald-400 transition-colors">
                  Fashion
                </a>
              </li>
              <li>
                <a href="/category/home" className="hover:text-emerald-400 transition-colors">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="/category/beauty" className="hover:text-emerald-400 transition-colors">
                  Beauty & Health
                </a>
              </li>
              <li>
                <a href="/deals" className="hover:text-emerald-400 transition-colors">
                  Today's Deals
                </a>
              </li>
              <li>
                <a href="/new-arrivals" className="hover:text-emerald-400 transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-emerald-400 transition-colors">
                  Product Reviews
                </a>
              </li>
              <li>
                <a href="/buying-guides" className="hover:text-emerald-400 transition-colors">
                  Buying Guides
                </a>
              </li>
              <li>
                <a href="/how-to" className="hover:text-emerald-400 transition-colors">
                  How-To Articles
                </a>
              </li>
              <li>
                <a href="/comparisons" className="hover:text-emerald-400 transition-colors">
                  Product Comparisons
                </a>
              </li>
              <li>
                <a href="/newsletter" className="hover:text-emerald-400 transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-emerald-400 transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-emerald-400 transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/track-order" className="hover:text-emerald-400 transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/warranty" className="hover:text-emerald-400 transition-colors">
                  Warranty Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400">
                Get exclusive deals, product reviews, and shopping tips delivered weekly.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 ShopWise. All rights reserved. Made with care for smart shoppers.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
              <a href="/affiliate-disclosure" className="hover:text-emerald-400 transition-colors">
                Affiliate Disclosure
              </a>
              <a href="/accessibility" className="hover:text-emerald-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
