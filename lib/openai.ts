import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY is not set in environment variables')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

/**
 * Generate AI-powered product description
 */
export async function generateProductDescription(
  productName: string,
  features: string[],
  category: string
): Promise<string> {
  try {
    const prompt = `Write a compelling, SEO-optimized product description for an e-commerce blog.

Product: ${productName}
Category: ${category}
Key Features: ${features.join(', ')}

Requirements:
- Write in an engaging, persuasive tone
- Highlight the key benefits (not just features)
- Include relevant keywords naturally
- Keep it between 150-200 words
- Focus on how the product solves customer problems
- Make it scannable with short paragraphs

Description:`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert e-commerce copywriter specializing in product descriptions that convert. You write engaging, benefit-focused copy that helps customers make informed purchase decisions.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating product description:', error)
    throw new Error('Failed to generate product description')
  }
}

/**
 * Generate blog post outline based on topic and products
 */
export async function generateBlogOutline(
  topic: string,
  targetProducts: string[],
  keywords: string[]
): Promise<string> {
  try {
    const prompt = `Create a detailed blog post outline for an e-commerce content marketing article.

Topic: ${topic}
Featured Products: ${targetProducts.join(', ')}
Target Keywords: ${keywords.join(', ')}

Requirements:
- Create a comprehensive outline with 6-8 main sections
- Include natural product placements throughout
- Focus on providing value and solving customer problems
- Make it SEO-friendly with keyword integration
- Include introduction and conclusion sections
- Add subheadings for better readability

Outline:`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert content strategist for e-commerce blogs. You create comprehensive outlines that blend valuable content with strategic product placements.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating blog outline:', error)
    throw new Error('Failed to generate blog outline')
  }
}

/**
 * Generate SEO-optimized meta description
 */
export async function generateMetaDescription(
  title: string,
  content: string
): Promise<string> {
  try {
    const prompt = `Create an SEO-optimized meta description for this blog post.

Title: ${title}
Content Summary: ${content.substring(0, 500)}...

Requirements:
- Keep it between 150-160 characters
- Include the main keyword naturally
- Make it compelling and click-worthy
- End with a call-to-action if possible
- Accurately summarize the content

Meta Description:`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are an SEO expert specializing in meta descriptions that improve click-through rates and accurately represent content.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating meta description:', error)
    throw new Error('Failed to generate meta description')
  }
}

/**
 * Generate product comparison content
 */
export async function generateProductComparison(
  products: Array<{ name: string; features: string[]; price: number }>
): Promise<string> {
  try {
    const productDetails = products
      .map(
        (p, i) =>
          `Product ${i + 1}: ${p.name}
Price: $${p.price}
Features: ${p.features.join(', ')}`
      )
      .join('\n\n')

    const prompt = `Write a detailed product comparison article for these products:

${productDetails}

Requirements:
- Create a balanced, objective comparison
- Highlight unique strengths of each product
- Include a comparison table format in the text
- Recommend which product is best for different user types
- Keep it informative and helpful
- Length: 400-500 words

Comparison:`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are a product review expert who creates fair, detailed comparisons that help customers make informed decisions.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating product comparison:', error)
    throw new Error('Failed to generate product comparison')
  }
}

/**
 * Generate buying guide content
 */
export async function generateBuyingGuide(
  category: string,
  priceRange: string,
  keyFactors: string[]
): Promise<string> {
  try {
    const prompt = `Create a comprehensive buying guide for ${category}.

Price Range: ${priceRange}
Key Factors to Consider: ${keyFactors.join(', ')}

Requirements:
- Start with why this purchase matters
- Explain key features and specifications to look for
- Provide tips for getting the best value
- Include common mistakes to avoid
- Add a decision-making framework
- Make it actionable and practical
- Length: 600-800 words

Buying Guide:`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are a shopping expert who creates helpful buying guides that empower customers to make confident purchase decisions.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating buying guide:', error)
    throw new Error('Failed to generate buying guide')
  }
}

/**
 * Generate review summary from multiple reviews
 */
export async function summarizeReviews(
  reviews: Array<{ rating: number; comment: string }>
): Promise<{ summary: string; pros: string[]; cons: string[] }> {
  try {
    const reviewTexts = reviews
      .map((r, i) => `Review ${i + 1} (${r.rating} stars): ${r.comment}`)
      .join('\n\n')

    const prompt = `Analyze these customer reviews and create a summary:

${reviewTexts}

Provide:
1. A brief summary paragraph (2-3 sentences)
2. Top 5 Pros (bullet points)
3. Top 5 Cons (bullet points)

Format as JSON:
{
  "summary": "...",
  "pros": ["...", "..."],
  "cons": ["...", "..."]
}`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are a review analysis expert who extracts key insights from customer feedback to help potential buyers.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    })

    const result = JSON.parse(completion.choices[0]?.message?.content || '{}')
    return result
  } catch (error) {
    console.error('Error summarizing reviews:', error)
    throw new Error('Failed to summarize reviews')
  }
}

export default openai
