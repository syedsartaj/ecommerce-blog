import Link from 'next/link';

const guides = [
  {
    slug: 'ultimate-buying-guide-winter-collection',
    title: 'Ultimate Buying Guide: Winter Collection 2024',
    excerpt: 'Everything you need to know about building the perfect winter wardrobe without breaking the bank.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
    readTime: '8 min read',
    difficulty: 'Beginner'
  },
  {
    slug: 'how-to-choose-laptop',
    title: 'How to Choose the Right Laptop in 2024',
    excerpt: 'From specs to budget, we break down everything you need to consider before buying a laptop.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
    readTime: '10 min read',
    difficulty: 'Intermediate'
  },
  {
    slug: 'complete-skincare-routine',
    title: 'Complete Skincare Routine Guide',
    excerpt: 'Build an effective skincare routine that works for your skin type and lifestyle.',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop',
    readTime: '12 min read',
    difficulty: 'Beginner'
  },
  {
    slug: 'home-office-setup-guide',
    title: 'The Ultimate Home Office Setup Guide',
    excerpt: 'Create a productive and comfortable workspace with our comprehensive setup guide.',
    category: 'Home & Office',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&h=600&fit=crop',
    readTime: '15 min read',
    difficulty: 'Intermediate'
  },
  {
    slug: 'fitness-equipment-beginners',
    title: 'Fitness Equipment for Beginners',
    excerpt: 'Start your fitness journey with the right equipment. No gym membership required.',
    category: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    readTime: '7 min read',
    difficulty: 'Beginner'
  },
  {
    slug: 'sustainable-shopping-guide',
    title: 'Guide to Sustainable Shopping',
    excerpt: 'Make eco-friendly choices without sacrificing quality or style.',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    readTime: '9 min read',
    difficulty: 'Beginner'
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Buying Guides
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Expert advice and comprehensive guides to help you make the best purchasing decisions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4">
            <button className="px-4 py-2 rounded-full bg-emerald-600 text-white font-medium whitespace-nowrap">
              All Guides
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
              Electronics
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
              Fashion
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
              Home & Office
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap hover:bg-gray-200 transition">
              Beauty
            </button>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-emerald-600">{guide.category}</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {guide.difficulty}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{guide.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                    <span className="text-emerald-600 font-medium group-hover:underline">
                      Read Guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Request a buying guide and our experts will create one just for you
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Request a Guide
          </Link>
        </div>
      </section>
    </div>
  );
}
