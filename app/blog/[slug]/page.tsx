import Link from 'next/link';
import { getSmakslyBlogBySlug, getSmakslyBlogs, formatBlogDate, estimateReadTime } from '@/lib/smaksly-blogs'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  // Fetch the blog from Smaksly database
  const blog = await getSmakslyBlogBySlug(params.slug)

  // If blog not found, show not found state
  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-10b981">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-10b981">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">Article Not Found</span>
            </div>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">This article could not be found. Please check the URL or return to the blog homepage.</p>
          <Link href="/blog" className="inline-block px-6 py-3 bg-10b981 text-white font-medium rounded-lg hover:bg-green-600 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Transform blog data for display
  const article = {
    title: blog.title,
    category: blog.category || 'Blog',
    image: blog.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop',
    date: blog.publish_date.toString(),
    readTime: estimateReadTime(blog.body),
    author: 'Editorial Team',
    content: blog.body
  }

  // Get related articles (other blogs, excluding current one)
  const allBlogs = await getSmakslyBlogs()
  const relatedArticles = allBlogs
    .filter(b => b.slug !== params.slug)
    .slice(0, 3)
    .map(b => ({
      slug: b.slug,
      title: b.title,
      image: b.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
    }))

  return (
    <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-10b981">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-10b981">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-10b981 text-white text-sm font-medium rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-600">
                <span>By {article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-10b981 prose-a:no-underline hover:prose-a:underline prose-ul:my-6 prose-li:my-2 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Share this article</h3>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                      Twitter
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                      Facebook
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-10b981 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}
