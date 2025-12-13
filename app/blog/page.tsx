import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const blogArticles = [
  {
    slug: 'ultimate-buying-guide-winter-collection',
    title: 'Ultimate Buying Guide: Winter Collection 2024',
    excerpt: 'Discover the must-have items for this winter season. From cozy sweaters to stylish boots, we cover everything you need to stay warm and fashionable.',
    category: 'Buying Guides',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
    date: '2024-01-15',
    readTime: '8 min read'
  },
  {
    slug: 'top-10-sustainable-products-2024',
    title: 'Top 10 Sustainable Products for Eco-Conscious Shoppers',
    excerpt: 'Make a positive impact with these carefully selected eco-friendly products. Our expert review covers quality, sustainability, and value.',
    category: 'Product Reviews',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    date: '2024-01-12',
    readTime: '6 min read'
  },
  {
    slug: 'how-to-style-minimalist-wardrobe',
    title: 'How to Style a Minimalist Wardrobe',
    excerpt: 'Learn the art of doing more with less. Our styling tips will help you create countless outfits with a curated selection of essential pieces.',
    category: 'Tips & Tricks',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    date: '2024-01-10',
    readTime: '5 min read'
  },
  {
    slug: 'smart-home-gadgets-review',
    title: 'Smart Home Gadgets That Actually Work',
    excerpt: 'We tested 20+ smart home devices to find the ones worth your money. See which gadgets made the cut and why.',
    category: 'Product Reviews',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
    date: '2024-01-08',
    readTime: '10 min read'
  },
  {
    slug: 'gift-guide-under-50',
    title: 'Gift Guide: Perfect Presents Under $50',
    excerpt: 'Finding the perfect gift doesn\'t have to break the bank. Check out our curated selection of thoughtful gifts for every occasion.',
    category: 'Buying Guides',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop',
    date: '2024-01-05',
    readTime: '7 min read'
  },
  {
    slug: 'maximize-small-space-storage',
    title: 'Maximize Your Small Space with Smart Storage Solutions',
    excerpt: 'Transform your compact living area with these clever storage hacks and space-saving products that actually work.',
    category: 'Tips & Tricks',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop',
    date: '2024-01-03',
    readTime: '6 min read'
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover buying guides, product reviews, and expert tips to make smarter shopping decisions
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-6 overflow-x-auto py-4">
              <button className="px-4 py-2 rounded-full bg-10b981 text-white font-medium whitespace-nowrap">
                All Articles
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                Buying Guides
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                Product Reviews
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
                Tips & Tricks
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-10b981">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-10b981 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span className="text-10b981 font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest buying guides, reviews, and shopping tips delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-10b981 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-10b981 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
