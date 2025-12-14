import BlogCard from '@/components/BlogCard'
import ProductCard from '@/components/ProductCard'
import ReviewSection from '@/components/ReviewSection'
import { ArrowRight, TrendingUp, Star, Package } from 'lucide-react'
import { getSmakslyBlogs, formatBlogDate, estimateReadTime, SmakslyBlog } from '@/lib/smaksly-blogs'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Transform SmakslyBlog to the format expected by BlogCard
function transformBlogForCard(blog: SmakslyBlog) {
  // Extract first 200 characters from body for excerpt
  const plainText = blog.body.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  const excerpt = plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '')

  return {
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    excerpt: excerpt,
    image: blog.image_url || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
    category: blog.category || "Blog",
    author: "Editorial Team",
    date: formatBlogDate(blog.publish_date),
    readTime: estimateReadTime(blog.body),
    productMentions: [],
  }
}

const featuredProducts = [
  {
    id: 1,
    name: "UltraBoost Pro Running Shoes",
    price: 149.99,
    rating: 4.8,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Footwear",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    rating: 4.9,
    reviews: 2891,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    badge: "Editor's Choice",
  },
  {
    id: 3,
    name: "Organic Bamboo Bedding Set",
    price: 89.99,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    category: "Home & Living",
    badge: "Eco-Friendly",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker Watch",
    price: 199.99,
    rating: 4.6,
    reviews: 1893,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    category: "Wearables",
    badge: "New Arrival",
  },
]

export default async function Home() {
  // Fetch blogs from Smaksly database
  const smakslyBlogs = await getSmakslyBlogs()
  const featuredPosts = smakslyBlogs.slice(0, 6).map(transformBlogForCard)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Trusted by 100K+ Smart Shoppers</span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Shop Smarter with
              <span className="text-emerald-600"> Expert Reviews</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Get honest product reviews, in-depth buying guides, and exclusive deals.
              We test everything so you can shop with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30">
                Browse Latest Reviews
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200">
                View All Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Strip */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Featured Products</h2>
            </div>
            <button className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Latest Articles & Reviews
              </h2>
              <p className="text-gray-600">
                Expert insights and honest reviews to help you make better buying decisions
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet. Check back soon!</p>
            </div>
          )}

          {featuredPosts.length > 0 && (
            <div className="mt-12 text-center md:hidden">
              <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
                View All Posts
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 fill-emerald-500 text-emerald-500" />
              <Star className="w-6 h-6 fill-emerald-500 text-emerald-500" />
              <Star className="w-6 h-6 fill-emerald-500 text-emerald-500" />
              <Star className="w-6 h-6 fill-emerald-500 text-emerald-500" />
              <Star className="w-6 h-6 fill-emerald-500 text-emerald-500" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              What Our Readers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of satisfied shoppers who trust our recommendations
            </p>
          </div>
          <ReviewSection />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Get weekly product reviews, exclusive discounts, and shopping tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm text-emerald-100 mt-4">
            Join 50,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}
