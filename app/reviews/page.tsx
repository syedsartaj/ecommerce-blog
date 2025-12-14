import Link from 'next/link';

const reviews = [
  {
    slug: 'best-wireless-earbuds-2024',
    title: 'Best Wireless Earbuds 2024: Top 10 Picks',
    excerpt: 'We tested 50+ wireless earbuds to find the best options for every budget and use case.',
    rating: 4.9,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop',
    date: '2024-01-15',
    author: 'Tech Team'
  },
  {
    slug: 'organic-skincare-review',
    title: 'Organic Skincare Products: Honest Review',
    excerpt: 'A deep dive into the best organic skincare products that actually deliver results.',
    rating: 4.7,
    category: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop',
    date: '2024-01-12',
    author: 'Beauty Editor'
  },
  {
    slug: 'smart-home-devices-compared',
    title: 'Smart Home Devices Compared: Which Is Best?',
    excerpt: 'We put popular smart home devices head-to-head to find the winners.',
    rating: 4.8,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
    date: '2024-01-10',
    author: 'Tech Team'
  },
  {
    slug: 'sustainable-fashion-brands',
    title: 'Top Sustainable Fashion Brands Reviewed',
    excerpt: 'Eco-friendly fashion that doesn\'t compromise on style or quality.',
    rating: 4.6,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    date: '2024-01-08',
    author: 'Fashion Editor'
  },
  {
    slug: 'kitchen-appliances-2024',
    title: 'Best Kitchen Appliances for 2024',
    excerpt: 'From air fryers to espresso machines, we review the must-have kitchen gadgets.',
    rating: 4.7,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    date: '2024-01-05',
    author: 'Home Editor'
  },
  {
    slug: 'fitness-tracker-showdown',
    title: 'Fitness Tracker Showdown: Apple vs Fitbit vs Garmin',
    excerpt: 'Which fitness tracker reigns supreme? We break down the pros and cons.',
    rating: 4.8,
    category: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&h=600&fit=crop',
    date: '2024-01-03',
    author: 'Fitness Team'
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honest, in-depth reviews to help you make informed purchasing decisions
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Link
                key={review.slug}
                href={`/blog/${review.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="text-sm font-bold text-gray-900">{review.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-emerald-600">{review.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{review.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {review.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{review.excerpt}</p>
                  <span className="text-emerald-600 font-medium group-hover:underline">
                    Read Review →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want Product Reviewed?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Submit your product for our team to review and feature on our site
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Submit for Review
          </Link>
        </div>
      </section>
    </div>
  );
}
