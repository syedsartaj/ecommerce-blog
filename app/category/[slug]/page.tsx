import Link from 'next/link';

const categoryProducts: Record<string, { name: string; products: any[] }> = {
  'electronics': {
    name: 'Electronics',
    products: [
      { slug: 'wireless-noise-cancelling-headphones', name: 'Wireless Noise-Cancelling Headphones', price: 299.99, originalPrice: 399.99, rating: 4.8, reviews: 1247, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop' },
      { slug: 'smart-fitness-watch', name: 'Smart Fitness Watch', price: 199.99, originalPrice: 249.99, rating: 4.7, reviews: 2103, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop' },
      { slug: 'portable-bluetooth-speaker', name: 'Portable Bluetooth Speaker', price: 79.99, rating: 4.7, reviews: 945, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop' },
    ]
  },
  'fashion': {
    name: 'Fashion',
    products: [
      { slug: 'organic-cotton-t-shirt', name: 'Organic Cotton T-Shirt', price: 29.99, rating: 4.6, reviews: 892, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop' },
      { slug: 'minimalist-wallet', name: 'Minimalist Leather Wallet', price: 39.99, rating: 4.9, reviews: 1876, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop' },
    ]
  },
  'home-&-living': {
    name: 'Home & Living',
    products: [
      { slug: 'bamboo-coffee-mug', name: 'Bamboo Coffee Mug Set', price: 24.99, rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop' },
      { slug: 'ceramic-dinnerware-set', name: 'Ceramic Dinnerware Set', price: 89.99, originalPrice: 119.99, rating: 4.6, reviews: 423, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop' },
      { slug: 'linen-bedding-set', name: 'Luxury Linen Bedding Set', price: 149.99, originalPrice: 199.99, rating: 4.8, reviews: 612, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop' },
    ]
  },
  'beauty-&-health': {
    name: 'Beauty & Health',
    products: [
      { slug: 'organic-skincare-set', name: 'Organic Skincare Set', price: 59.99, rating: 4.7, reviews: 834, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop' },
    ]
  },
  'sports-&-fitness': {
    name: 'Sports & Fitness',
    products: [
      { slug: 'yoga-mat-eco', name: 'Eco-Friendly Yoga Mat', price: 49.99, rating: 4.7, reviews: 1456, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop' },
      { slug: 'stainless-water-bottle', name: 'Insulated Water Bottle', price: 34.99, rating: 4.9, reviews: 2341, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop' },
    ]
  },
  'kitchen-&-dining': {
    name: 'Kitchen & Dining',
    products: [
      { slug: 'ceramic-dinnerware-set', name: 'Ceramic Dinnerware Set', price: 89.99, originalPrice: 119.99, rating: 4.6, reviews: 423, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop' },
      { slug: 'bamboo-coffee-mug', name: 'Bamboo Coffee Mug Set', price: 24.99, rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop' },
    ]
  }
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryProducts[params.slug] || { name: 'Category', products: [] };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="mb-4">
              <Link href="/" className="text-gray-500 hover:text-emerald-600">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">{category.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of {category.name.toLowerCase()} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category.products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
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
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
              <Link href="/products" className="mt-4 inline-block text-emerald-600 font-medium hover:underline">
                Browse all products →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
