import Link from 'next/link';

const deals = [
  {
    slug: 'wireless-noise-cancelling-headphones',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    category: 'Electronics',
    endsIn: '2 days'
  },
  {
    slug: 'smart-fitness-watch',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    category: 'Electronics',
    endsIn: '3 days'
  },
  {
    slug: 'ceramic-dinnerware-set',
    name: 'Ceramic Dinnerware Set',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop',
    category: 'Home & Kitchen',
    endsIn: '1 day'
  },
  {
    slug: 'linen-bedding-set',
    name: 'Luxury Linen Bedding Set',
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
    category: 'Home & Kitchen',
    endsIn: '4 days'
  },
  {
    slug: 'running-shoes-pro',
    name: 'Pro Running Shoes',
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    category: 'Sports & Fitness',
    endsIn: '2 days'
  },
  {
    slug: 'designer-sunglasses',
    name: 'Designer Sunglasses',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
    category: 'Accessories',
    endsIn: '5 days'
  }
];

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hot Deals & Discounts
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Limited-time offers on our best products. Don't miss out!
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Banner */}
      <section className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-white">
            <span className="text-lg">Flash Sale Ends In:</span>
            <div className="flex gap-2">
              <div className="bg-red-500 px-3 py-1 rounded font-bold">23</div>
              <span className="text-xl">:</span>
              <div className="bg-red-500 px-3 py-1 rounded font-bold">45</div>
              <span className="text-xl">:</span>
              <div className="bg-red-500 px-3 py-1 rounded font-bold">12</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <Link
                key={deal.slug}
                href={`/products/${deal.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-square overflow-hidden relative">
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    -{deal.discount}%
                  </span>
                  <span className="absolute top-3 right-3 z-10 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    Ends in {deal.endsIn}
                  </span>
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{deal.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {deal.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-red-500">
                      ${deal.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <button className="mt-4 w-full py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                    Shop Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to get exclusive deals and early access to sales
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
