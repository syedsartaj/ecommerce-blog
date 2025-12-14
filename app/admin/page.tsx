'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, Search, ShoppingBag, Tag, Eye, X, Save, Image, DollarSign } from 'lucide-react'

// TypeScript Interfaces
interface Author {
  name: string
  avatar: string
}

interface RelatedProduct {
  productId: string
  name: string
  price: number
  image: string
  link: string
}

interface Post {
  _id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'product-reviews' | 'buying-guides' | 'industry-news' | 'tips-tricks' | 'comparisons' | 'deals'
  author: Author
  featuredImage: string
  relatedProducts: RelatedProduct[]
  isFeatured: boolean
  published: boolean
  tags: string[]
  seoTitle: string
  seoDescription: string
  createdAt?: string
  updatedAt?: string
}

interface Stats {
  total: number
  published: number
  draft: number
  byCategory: Record<string, number>
}

interface Toast {
  id: number
  message: string
  type: 'success' | 'error'
}

const CATEGORIES = [
  { value: 'product-reviews', label: 'Product Reviews' },
  { value: 'buying-guides', label: 'Buying Guides' },
  { value: 'industry-news', label: 'Industry News' },
  { value: 'tips-tricks', label: 'Tips & Tricks' },
  { value: 'comparisons', label: 'Comparisons' },
  { value: 'deals', label: 'Deals & Offers' }
]

export default function AdminDashboard() {
  // State Management
  const [posts, setPosts] = useState<Post[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [toasts, setToasts] = useState<Toast[]>([])

  // Form State
  const [showForm, setShowForm] = useState(false)
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Post>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'product-reviews',
    author: { name: '', avatar: '' },
    featuredImage: '',
    relatedProducts: [],
    isFeatured: false,
    published: false,
    tags: [],
    seoTitle: '',
    seoDescription: ''
  })
  const [tagInput, setTagInput] = useState('')
  const [productForm, setProductForm] = useState<RelatedProduct>({
    productId: '',
    name: '',
    price: 0,
    image: '',
    link: ''
  })
  const [submitting, setSubmitting] = useState(false)

  // Initial Data Fetch
  useEffect(() => {
    fetchPosts()
  }, [])

  // Calculate Stats
  useEffect(() => {
    if (posts.length > 0) {
      calculateStats()
    }
  }, [posts])

  // Toast Functions
  const showToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 5000)
  }

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  // API Functions
  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/posts')
      const data = await response.json()
      if (data.success) {
        setPosts(data.data || [])
      } else {
        showToast('Failed to fetch posts', 'error')
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      showToast('Error loading posts', 'error')
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = () => {
    const total = posts.length
    const published = posts.filter(p => p.published).length
    const draft = posts.filter(p => !p.published).length
    const byCategory: Record<string, number> = {}

    posts.forEach(post => {
      byCategory[post.category] = (byCategory[post.category] || 0) + 1
    })

    setStats({ total, published, draft, byCategory })
  }

  const handleCreatePost = async () => {
    try {
      setSubmitting(true)
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()

      if (data.success) {
        showToast('Post created successfully!', 'success')
        await fetchPosts()
        resetForm()
      } else {
        showToast(data.error || 'Failed to create post', 'error')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      showToast('Error creating post', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpdatePost = async () => {
    if (!editingId) return

    try {
      setSubmitting(true)
      const response = await fetch(`/api/posts/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()

      if (data.success) {
        showToast('Post updated successfully!', 'success')
        await fetchPosts()
        resetForm()
      } else {
        showToast(data.error || 'Failed to update post', 'error')
      }
    } catch (error) {
      console.error('Error updating post:', error)
      showToast('Error updating post', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()

      if (data.success) {
        showToast('Post deleted successfully!', 'success')
        await fetchPosts()
      } else {
        showToast(data.error || 'Failed to delete post', 'error')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      showToast('Error deleting post', 'error')
    }
  }

  // Form Functions
  const openCreateForm = () => {
    setFormMode('create')
    setShowForm(true)
    resetForm()
  }

  const openEditForm = (post: Post) => {
    setFormMode('edit')
    setEditingId(post._id || null)
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      author: post.author,
      featuredImage: post.featuredImage,
      relatedProducts: post.relatedProducts,
      isFeatured: post.isFeatured,
      published: post.published,
      tags: post.tags,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription
    })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'product-reviews',
      author: { name: '', avatar: '' },
      featuredImage: '',
      relatedProducts: [],
      isFeatured: false,
      published: false,
      tags: [],
      seoTitle: '',
      seoDescription: ''
    })
    setEditingId(null)
    setShowForm(false)
    setTagInput('')
    setProductForm({ productId: '', name: '', price: 0, image: '', link: '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formMode === 'create') {
      handleCreatePost()
    } else {
      handleUpdatePost()
    }
  }

  // Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim()
  }

  const handleTitleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      title: value,
      slug: generateSlug(value)
    }))
  }

  // Tag Management
  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }))
  }

  // Product Management
  const addProduct = () => {
    if (productForm.name && productForm.price > 0) {
      setFormData(prev => ({
        ...prev,
        relatedProducts: [...prev.relatedProducts, { ...productForm, productId: `prod-${Date.now()}` }]
      }))
      setProductForm({ productId: '', name: '', price: 0, image: '', link: '' })
    }
  }

  const removeProduct = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      relatedProducts: prev.relatedProducts.filter(p => p.productId !== productId)
    }))
  }

  // Filter Posts
  const filteredPosts = posts.filter(post => {
    const searchLower = searchTerm.toLowerCase()
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.category.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg animate-slide-in ${
              toast.type === 'success'
                ? 'bg-emerald-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  E-Commerce Blog Dashboard
                </h1>
                <p className="text-gray-600 mt-1">Manage all your posts from one central location</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-teal-500">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-2 text-teal-600" />
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={openCreateForm}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Post
            </button>
            <button
              onClick={() => {
                if (posts.length > 0) {
                  openEditForm(posts[0])
                } else {
                  showToast('No posts available to edit', 'error')
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Edit className="w-5 h-5 mr-2" />
              Edit Blog
            </button>
            <button
              onClick={() => {
                if (posts.length > 0) {
                  handleDeletePost(posts[0]._id || '')
                } else {
                  showToast('No posts available to delete', 'error')
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Trash2 className="w-5 h-5 mr-2" />
              Delete Blog
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Posts */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Total Posts</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.total}</p>
                </div>
                <div className="bg-teal-100 rounded-full p-4">
                  <ShoppingBag className="w-8 h-8 text-teal-600" />
                </div>
              </div>
            </div>

            {/* Published */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Published</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.published}</p>
                </div>
                <div className="bg-emerald-100 rounded-full p-4">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Drafts */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Drafts</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.draft}</p>
                </div>
                <div className="bg-amber-100 rounded-full p-4">
                  <Edit className="w-8 h-8 text-amber-600" />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Categories</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{Object.keys(stats.byCategory).length}</p>
                </div>
                <div className="bg-blue-100 rounded-full p-4">
                  <Tag className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Breakdown */}
        {stats && Object.keys(stats.byCategory).length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Tag className="w-5 h-5 mr-2 text-teal-600" />
              Posts by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(stats.byCategory).map(([category, count]) => (
                <div key={category} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg p-4 border border-teal-200">
                  <p className="text-xs font-medium text-gray-600 uppercase mb-1">
                    {CATEGORIES.find(c => c.value === category)?.label || category}
                  </p>
                  <p className="text-2xl font-bold text-teal-600">{count}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inline Create/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-teal-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                {formMode === 'create' ? <Plus className="w-6 h-6 mr-2 text-teal-600" /> : <Edit className="w-6 h-6 mr-2 text-blue-600" />}
                {formMode === 'create' ? 'Create New Post' : 'Edit Post'}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter post title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug (auto-generated)
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="post-slug"
                  />
                </div>
              </div>

              {/* Category and Author */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: { ...prev.author, name: e.target.value } }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author Avatar URL
                  </label>
                  <input
                    type="url"
                    value={formData.author.avatar}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: { ...prev.author, avatar: e.target.value } }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="https://..."
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Brief summary of the post..."
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-mono text-sm"
                  placeholder="Post content (supports Markdown)..."
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Image className="w-4 h-4 mr-1" />
                  Featured Image URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.featuredImage}
                  onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Add tag and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:text-teal-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Products */}
              <div className="border-t pt-6">
                <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center">
                  <ShoppingBag className="w-4 h-4 mr-1" />
                  Related Products
                </label>

                {/* Product Form */}
                <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-3">
                    <input
                      type="text"
                      value={productForm.name}
                      onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      placeholder="Product name"
                    />
                    <input
                      type="number"
                      step="0.01"
                      value={productForm.price}
                      onChange={(e) => setProductForm(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      placeholder="Price"
                    />
                    <input
                      type="url"
                      value={productForm.image}
                      onChange={(e) => setProductForm(prev => ({ ...prev, image: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      placeholder="Image URL"
                    />
                    <input
                      type="url"
                      value={productForm.link}
                      onChange={(e) => setProductForm(prev => ({ ...prev, link: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      placeholder="Product link"
                    />
                    <button
                      type="button"
                      onClick={addProduct}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </button>
                  </div>
                </div>

                {/* Product List */}
                <div className="space-y-2">
                  {formData.relatedProducts.map(product => (
                    <div
                      key={product.productId}
                      className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-lg"
                    >
                      {product.image && (
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-emerald-600 flex items-center">
                          <DollarSign className="w-3 h-3" />
                          {product.price.toFixed(2)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeProduct(product.productId)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">SEO Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SEO Title
                    </label>
                    <input
                      type="text"
                      value={formData.seoTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, seoTitle: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="SEO optimized title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SEO Description
                    </label>
                    <textarea
                      value={formData.seoDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, seoDescription: e.target.value }))}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="SEO meta description"
                    />
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex gap-6 border-t pt-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm font-medium text-gray-700 flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    Published
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                    className="w-5 h-5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Featured Post
                  </span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 border-t pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5 mr-2" />
                  {submitting ? 'Saving...' : (formMode === 'create' ? 'Create Post' : 'Update Post')}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search posts by title, excerpt, category, or tags..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <ShoppingBag className="w-6 h-6 mr-2" />
              All Posts ({filteredPosts.length})
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-xl font-medium text-gray-600 mb-2">
                {searchTerm ? 'No posts found' : 'No posts yet'}
              </p>
              <p className="text-gray-500 mb-6">
                {searchTerm ? 'Try adjusting your search' : 'Create your first post to get started'}
              </p>
              {!searchTerm && (
                <button
                  onClick={openCreateForm}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Post
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredPosts.map(post => (
                <div
                  key={post._id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Featured Image */}
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                            {post.title}
                            {post.isFeatured && (
                              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                Featured
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{post.slug}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditForm(post)}
                            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeletePost(post._id || '')}
                            className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
                          {CATEGORIES.find(c => c.value === post.category)?.label || post.category}
                        </span>

                        <span className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${
                          post.published
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          <Eye className="w-3 h-3 mr-1" />
                          {post.published ? 'Published' : 'Draft'}
                        </span>

                        {post.relatedProducts.length > 0 && (
                          <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                            <ShoppingBag className="w-3 h-3 mr-1" />
                            {post.relatedProducts.length} Products
                          </span>
                        )}

                        {post.tags.length > 0 && (
                          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                            <Tag className="w-3 h-3 mr-1" />
                            {post.tags.length} Tags
                          </span>
                        )}

                        <span className="text-gray-500">
                          by {post.author.name}
                        </span>
                      </div>

                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {post.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Showing {filteredPosts.length} of {posts.length} posts
            {searchTerm && ` - Filtered by: "${searchTerm}"`}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
