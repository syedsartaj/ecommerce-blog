import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts, createPost } from '@/lib/db'

// GET /api/posts - Get all posts with optional filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category') || undefined
    const featured = searchParams.get('featured') === 'true' ? true : undefined
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined
    const skip = searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : undefined
    const sortBy = searchParams.get('sortBy') || 'createdAt'
    const sortOrder = (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc'

    const posts = await getAllPosts({
      category,
      featured,
      limit,
      skip,
      sortBy,
      sortOrder
    })

    return NextResponse.json({
      success: true,
      data: posts,
      count: posts.length
    })
  } catch (error: any) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch posts',
        message: error.message
      },
      { status: 500 }
    )
  }
}

// POST /api/posts - Create a new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'slug', 'excerpt', 'content', 'category', 'image', 'author']
    const missingFields = requiredFields.filter(field => !body[field])

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          missingFields
        },
        { status: 400 }
      )
    }

    // Create post data
    const postData = {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      image: body.image,
      author: body.author,
      products: body.products || [],
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
      featured: body.featured || false,
      tags: body.tags || []
    }

    const newPost = await createPost(postData)

    return NextResponse.json(
      {
        success: true,
        data: newPost,
        message: 'Post created successfully'
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create post',
        message: error.message
      },
      { status: 500 }
    )
  }
}
