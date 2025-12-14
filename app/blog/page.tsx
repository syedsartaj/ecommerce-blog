import Link from 'next/link';
import { getSmakslyBlogs, formatBlogDate, estimateReadTime, SmakslyBlog } from '@/lib/smaksly-blogs'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Transform SmakslyBlog to the format expected by the page
function transformBlogForListing(blog: SmakslyBlog) {
  // Extract first 200 characters from body for excerpt
  const plainText = blog.body.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  const excerpt = plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '')

  return {
    slug: blog.slug,
    title: blog.title,
    excerpt: excerpt,
    category: blog.category || 'Blog',
    image: blog.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    date: blog.publish_date.toString(),
    readTime: estimateReadTime(blog.body)
  }
}

export default async function BlogPage() {
  // Fetch blogs from Smaksly database
  const smakslyBlogs = await getSmakslyBlogs()
  const blogArticles = smakslyBlogs.map(transformBlogForListing)
  return (
    <div className="min-h-screen bg-white">
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
            {blogArticles.length > 0 ? (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No blog posts available yet. Check back soon!</p>
              </div>
            )}
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
      </div>
  );
}
