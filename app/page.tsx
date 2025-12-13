import BlogCard from '@/components/BlogCard'
import ProductCard from '@/components/ProductCard'
import ReviewSection from '@/components/ReviewSection'
import { ArrowRight, TrendingUp, Star, Package } from 'lucide-react'

// Sample data - replace with actual database queries
const featuredPosts = [
  {
    id: 1,
    title: "10 Must-Have Kitchen Gadgets That Will Change Your Cooking",
    excerpt: "Discover the innovative kitchen tools that professional chefs swear by. From smart scales to precision thermometers, these gadgets will elevate your culinary game.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop",
    category: "Kitchen & Home",
    author: "Sarah Johnson",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    productMentions: ["Smart Kitchen Scale", "Digital Thermometer"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sustainable Fashion in 2024",
    excerpt: "Learn how to build a sustainable wardrobe without breaking the bank. We review eco-friendly brands and share tips for conscious shopping.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop",
    category: "Fashion",
    author: "Michael Chen",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    productMentions: ["Organic Cotton Tees", "Recycled Denim"],
  },
  {
    id: 3,
    title: "Best Smart Home Devices for Beginners: A Complete Setup Guide",
    excerpt: "Starting your smart home journey? This comprehensive guide covers the essential devices, setup tips, and automation ideas for your first smart home.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
    category: "Tech & Electronics",
    author: "David Park",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    productMentions: ["Smart Speaker", "Smart Bulbs"],
  },
  {
    id: 4,
    title: "Skincare Routine Essentials: Dermatologist-Approved Products",
    excerpt: "Build an effective skincare routine with these expert-recommended products. We break down each step and review the best options for every skin type.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop",
    category: "Beauty & Health",
    author: "Emma Williams",
    date: "Dec 3, 2024",
    readTime: "7 min read",
    productMentions: ["Vitamin C Serum", "Hyaluronic Acid"],
  },
  {
    id: 5,
    title: "Work From Home Setup: Ergonomic Essentials Under $500",
    excerpt: "Create a productive and comfortable home office without overspending. Our budget-friendly guide features ergonomic chairs, desks, and accessories.",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&h=500&fit=crop",
    category: "Office & Productivity",
    author: "James Taylor",
    date: "Dec 1, 2024",
    readTime: "9 min read",
    productMentions: ["Ergonomic Chair", "Standing Desk"],
  },
  {
    id: 6,
    title: "Fitness Gear Review: Top Equipment for Home Workouts",
    excerpt: "Stay fit at home with these highly-rated fitness products. From resistance bands to smart yoga mats, we tested them all so you don't have to.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
    category: "Fitness & Sports",
    author: "Lisa Anderson",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    productMentions: ["Resistance Bands Set", "Yoga Mat Pro"],
  },
]

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

export default function Home() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
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
