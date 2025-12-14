import { NextRequest, NextResponse } from 'next/server'
import { getPostById, updatePost, deletePost } from '@/lib/db'

// GET /api/posts/[id] - Get a single post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPostById(params.id)

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'Post not found'
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: post
    })
  } catch (error: any) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch post',
        message: error.message
      },
      { status: 500 }
    )
  }
}

// PUT /api/posts/[id] - Update a post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    // Build update data
    const updateData: any = {}

    if (body.title !== undefined) updateData.title = body.title
    if (body.slug !== undefined) updateData.slug = body.slug
    if (body.excerpt !== undefined) updateData.excerpt = body.excerpt
    if (body.content !== undefined) updateData.content = body.content
    if (body.category !== undefined) updateData.category = body.category
    if (body.image !== undefined) updateData.image = body.image
    if (body.author !== undefined) updateData.author = body.author
    if (body.products !== undefined) updateData.products = body.products
    if (body.publishedAt !== undefined) {
      updateData.publishedAt = body.publishedAt ? new Date(body.publishedAt) : null
    }
    if (body.featured !== undefined) updateData.featured = body.featured
    if (body.tags !== undefined) updateData.tags = body.tags

    const updatedPost = await updatePost(params.id, updateData)

    if (!updatedPost) {
      return NextResponse.json(
        {
          success: false,
          error: 'Post not found'
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: updatedPost,
      message: 'Post updated successfully'
    })
  } catch (error: any) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update post',
        message: error.message
      },
      { status: 500 }
    )
  }
}

// DELETE /api/posts/[id] - Delete a post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = await deletePost(params.id)

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Post not found or already deleted'
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Post deleted successfully'
    })
  } catch (error: any) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete post',
        message: error.message
      },
      { status: 500 }
    )
  }
}
