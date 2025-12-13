import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const products = [
  {
    slug: 'wireless-noise-cancelling-headphones',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    category: 'Electronics',
    badge: 'Best Seller'
  },
  {
    slug: 'organic-cotton-t-shirt',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    category: 'Apparel',
    badge: 'Eco-Friendly'
  },
  {
    slug: 'smart-fitness-watch',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 2103,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    category: 'Electronics',
    badge: 'Sale'
  },
  {
    slug: 'bamboo-coffee-mug',
    name: 'Bamboo Coffee Mug Set',
    price: 24.99,
    rating: 4.9,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop',
    category: 'Home & Kitchen',
    badge: 'Eco-Friendly'
  },
  {
    slug: 'leather-laptop-bag',
    name: 'Premium Leather Laptop Bag',
    price: 159.99,
    rating: 4.8,
    reviews: 734,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'Accessories',
    badge: ''
  },
  {
    slug: 'yoga-mat-eco',
    name: 'Eco-Friendly Yoga Mat',
    price: 49.99,
    rating: 4.7,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop',
    category: 'Sports & Fitness',
    badge: 'Eco-Friendly'
  },
  {
    slug: 'ceramic-dinnerware-set',
    name: 'Ceramic Dinnerware Set',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop',
    category: 'Home & Kitchen',
    badge: 'Sale'
  },
  {
    slug: 'minimalist-wallet',
    name: 'Minimalist Leather Wallet',
    price: 39.99,
    rating: 4.9,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    category: 'Accessories',
    badge: 'Best Seller'
  },
  {
    slug: 'portable-bluetooth-speaker',
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    rating: 4.7,
    reviews: 945,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    category: 'Electronics',
    badge: ''
  },
  {
    slug: 'linen-bedding-set',
    name: 'Luxury Linen Bedding Set',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 612,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
    category: 'Home & Kitchen',
    badge: 'Sale'
  },
  {
    slug: 'stainless-water-bottle',
    name: 'Insulated Water Bottle',
    price: 34.99,
    rating: 4.9,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
    category: 'Sports & Fitness',
    badge: 'Best Seller'
  },
  {
    slug: 'canvas-backpack',
    name: 'Canvas Travel Backpack',
    price: 69.99,
    rating: 4.6,
    reviews: 823,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'Accessories',
    badge: ''
  }
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Products
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our curated collection of quality products designed for modern living
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Sort */}
        <section className="border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
              <div className="flex gap-4 overflow-x-auto">
                <button className="px-4 py-2 rounded-full bg-10b981 text-white font-medium whitespace-nowrap">
                  All Products
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                  Electronics
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                  Apparel
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                  Home & Kitchen
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                  Accessories
                </button>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-10b981 focus:border-transparent outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden relative">
                    {product.badge && (
                      <span className={`absolute top-3 right-3 z-10 px-3 py-1 text-xs font-bold text-white rounded-full ${
                        product.badge === 'Best Seller' ? 'bg-10b981' :
                        product.badge === 'Sale' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-10b981 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-10b981 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">Every product tested and approved</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-10b981 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-10b981 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-10b981 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">We're here to help</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
