import { Clock, User, Tag } from 'lucide-react'
import Image from 'next/image'

interface BlogPost {
  id: number | string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  productMentions?: string[]
  slug?: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card card-hover group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="image-overlay" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="badge badge-emerald shadow-lg backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        {/* Product Mentions Badge */}
        {post.productMentions && post.productMentions.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <Tag className="w-3 h-3 text-emerald-600" />
                Featured: {post.productMentions.join(', ')}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
          <a href={`/blog/${post.slug || post.id}`}>{post.title}</a>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">{post.date}</span>
          <a
            href={`/blog/${post.slug || post.id}`}
            className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 group/link"
          >
            Read More
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
