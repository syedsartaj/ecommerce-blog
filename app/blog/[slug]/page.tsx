import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const articleData: Record<string, any> = {
  'ultimate-buying-guide-winter-collection': {
    title: 'Ultimate Buying Guide: Winter Collection 2024',
    category: 'Buying Guides',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'Sarah Johnson',
    content: `
      <p class="lead">As temperatures drop and winter approaches, it's time to refresh your wardrobe with pieces that combine style, comfort, and functionality. Our comprehensive buying guide covers everything you need to know about the winter 2024 collection.</p>

      <h2>Essential Winter Pieces</h2>
      <p>Building a versatile winter wardrobe starts with investing in quality essentials that will serve you season after season. Here are the must-have items:</p>

      <h3>1. The Perfect Winter Coat</h3>
      <p>Your winter coat is the foundation of your cold-weather wardrobe. Look for options that offer:</p>
      <ul>
        <li>Quality insulation (down or synthetic)</li>
        <li>Water-resistant or waterproof exterior</li>
        <li>Adjustable features for customized fit</li>
        <li>Versatile styling that works with any outfit</li>
      </ul>

      <h3>2. Layering Basics</h3>
      <p>Mastering the art of layering is key to staying warm without sacrificing style. Stock up on:</p>
      <ul>
        <li>Thermal base layers in neutral colors</li>
        <li>Cashmere or merino wool sweaters</li>
        <li>Versatile cardigans and hoodies</li>
        <li>Button-down shirts for professional settings</li>
      </ul>

      <h3>3. Winter Footwear</h3>
      <p>Keep your feet warm and dry with proper winter boots. Consider:</p>
      <ul>
        <li>Insulated boots with good traction</li>
        <li>Waterproof materials like leather or Gore-Tex</li>
        <li>Ankle or knee-high options for versatility</li>
        <li>Comfortable fit for all-day wear</li>
      </ul>

      <h2>Shopping Tips</h2>
      <p>Make smart purchases with these expert recommendations:</p>
      <ul>
        <li>Invest in quality over quantity</li>
        <li>Choose neutral colors for maximum versatility</li>
        <li>Try everything on before buying</li>
        <li>Check care instructions to ensure longevity</li>
        <li>Take advantage of end-of-season sales for next year</li>
      </ul>

      <h2>Featured Products</h2>
      <p>Based on our testing and customer reviews, here are our top picks for winter 2024:</p>
      <ul>
        <li><strong>Arctic Explorer Parka</strong> - Best overall winter coat ($299)</li>
        <li><strong>Merino Comfort Sweater</strong> - Best layering piece ($89)</li>
        <li><strong>All-Weather Boot Pro</strong> - Best winter boots ($159)</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>Building a winter wardrobe doesn't have to be overwhelming. Focus on quality essentials, and you'll be prepared for whatever the season brings. Remember, the best pieces are those that make you feel confident and comfortable, no matter the temperature.</p>
    `
  }
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug] || {
    title: 'Article Not Found',
    category: 'Blog',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop',
    date: '2024-01-01',
    readTime: '5 min read',
    author: 'Editorial Team',
    content: '<p>This article could not be found. Please check the URL or return to the blog homepage.</p>'
  };

  const relatedArticles = [
    {
      slug: 'top-10-sustainable-products-2024',
      title: 'Top 10 Sustainable Products for Eco-Conscious Shoppers',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
    },
    {
      slug: 'how-to-style-minimalist-wardrobe',
      title: 'How to Style a Minimalist Wardrobe',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop'
    },
    {
      slug: 'gift-guide-under-50',
      title: 'Gift Guide: Perfect Presents Under $50',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
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
      </main>
      <Footer />
    </>
  );
}
