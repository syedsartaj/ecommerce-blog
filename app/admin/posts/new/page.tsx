import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PostForm from '@/components/PostForm'

export default function NewPostPage() {
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

          <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
          <p className="text-gray-600 mt-1">Write and publish a new blog post for your e-commerce store</p>
        </div>

        {/* Form */}
        <PostForm />
      </div>
    </div>
  )
}
