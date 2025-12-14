'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'
import PostForm from '@/components/PostForm'

interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  image: string
  author: string
  products: string[]
  publishedAt?: string
  featured: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

export default function EditPostPage() {
  const params = useParams()
  const postId = params.id as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (postId) {
      fetchPost()
    }
  }, [postId])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`)
      const data = await response.json()

      if (data.success) {
        setPost(data.data)
      } else {
        setError(data.error || 'Failed to load post')
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      setError('Error loading post')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg inline-block mb-4">
            {error || 'Post not found'}
          </div>
          <div>
            <Link
              href="/admin"
              className="inline-flex items-center text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Admin
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Admin
          </Link>

          <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
          <p className="text-gray-600 mt-1">Update your blog post details and content</p>
        </div>

        {/* Form */}
        <PostForm
          postId={postId}
          initialData={{
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            image: post.image,
            author: post.author,
            products: post.products,
            publishedAt: post.publishedAt,
            featured: post.featured,
            tags: post.tags
          }}
        />
      </div>
    </div>
  )
}
