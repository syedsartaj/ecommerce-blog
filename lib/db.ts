import { MongoClient, Db, Collection } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

const uri: string = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the value across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, create a new client for each request
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Database name
const DB_NAME = 'ecommerce_blog'

// Collection interfaces
export interface BlogPost {
  _id?: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  authorId: string
  category: string
  tags: string[]
  featuredImage: string
  productMentions: ProductMention[]
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
  status: 'draft' | 'published' | 'archived'
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  views: number
  readTime: number
}

export interface Product {
  _id?: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  subcategory?: string
  brand: string
  sku: string
  images: string[]
  features: string[]
  specifications: Record<string, any>
  rating: number
  reviews: number
  inStock: boolean
  stockQuantity: number
  badge?: 'Best Seller' | "Editor's Choice" | 'New Arrival' | 'Eco-Friendly' | 'Limited Edition'
  affiliateLink?: string
  createdAt: Date
  updatedAt: Date
}

export interface ProductMention {
  productId: string
  productName: string
  position: number // Position in the article
  context: string // Brief context of mention
}

export interface Review {
  _id?: string
  productId: string
  userId: string
  userName: string
  userImage?: string
  rating: number
  title: string
  comment: string
  verified: boolean
  helpful: number
  notHelpful: number
  images?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  _id?: string
  name: string
  slug: string
  description: string
  icon?: string
  image?: string
  parentCategory?: string
  subcategories?: string[]
  productCount: number
  postCount: number
  order: number
  active: boolean
}

export interface Newsletter {
  _id?: string
  email: string
  name?: string
  status: 'active' | 'unsubscribed'
  preferences: {
    deals: boolean
    reviews: boolean
    guides: boolean
    newsletter: boolean
  }
  subscribedAt: Date
  unsubscribedAt?: Date
}

// Helper function to get database
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise
  return client.db(DB_NAME)
}

// Helper functions for collections
export async function getBlogPostsCollection(): Promise<Collection<BlogPost>> {
  const db = await getDatabase()
  return db.collection<BlogPost>('blog_posts')
}

export async function getProductsCollection(): Promise<Collection<Product>> {
  const db = await getDatabase()
  return db.collection<Product>('products')
}

export async function getReviewsCollection(): Promise<Collection<Review>> {
  const db = await getDatabase()
  return db.collection<Review>('reviews')
}

export async function getCategoriesCollection(): Promise<Collection<Category>> {
  const db = await getDatabase()
  return db.collection<Category>('categories')
}

export async function getNewsletterCollection(): Promise<Collection<Newsletter>> {
  const db = await getDatabase()
  return db.collection<Newsletter>('newsletter_subscribers')
}

// Database initialization and indexes
export async function initializeDatabase() {
  const db = await getDatabase()

  // Create indexes for blog posts
  await db.collection('blog_posts').createIndexes([
    { key: { slug: 1 }, unique: true },
    { key: { status: 1, publishedAt: -1 } },
    { key: { category: 1, status: 1 } },
    { key: { authorId: 1 } },
    { key: { tags: 1 } },
    { key: { createdAt: -1 } },
  ])

  // Create indexes for products
  await db.collection('products').createIndexes([
    { key: { slug: 1 }, unique: true },
    { key: { sku: 1 }, unique: true },
    { key: { category: 1, inStock: 1 } },
    { key: { brand: 1 } },
    { key: { rating: -1 } },
    { key: { price: 1 } },
  ])

  // Create indexes for reviews
  await db.collection('reviews').createIndexes([
    { key: { productId: 1, createdAt: -1 } },
    { key: { userId: 1 } },
    { key: { rating: 1 } },
  ])

  // Create indexes for categories
  await db.collection('categories').createIndexes([
    { key: { slug: 1 }, unique: true },
    { key: { parentCategory: 1 } },
    { key: { order: 1 } },
  ])

  // Create indexes for newsletter
  await db.collection('newsletter_subscribers').createIndexes([
    { key: { email: 1 }, unique: true },
    { key: { status: 1 } },
  ])

  console.log('Database indexes created successfully')
}

export default clientPromise
