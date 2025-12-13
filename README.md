# ShopWise - E-commerce Blog Template

A modern, feature-rich e-commerce blog template built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for content marketing with seamless product integration.

## Features

### Content & Product Integration
- **Blog Posts with Product Mentions**: Seamlessly integrate product recommendations within blog content
- **Product Cards**: Beautiful product displays with ratings, reviews, and pricing
- **Review System**: Customer reviews and testimonials to build trust
- **Category Management**: Organized product and content categorization
- **Featured Products**: Highlight top products in strategic locations

### AI-Powered Content
- **OpenAI Integration**: Generate product descriptions, blog outlines, and meta descriptions
- **Product Comparisons**: AI-generated comparison articles
- **Buying Guides**: Automated buying guide creation
- **Review Summarization**: Extract insights from customer feedback

### E-commerce Features
- **Shopping Cart**: Full cart functionality (icon + counter)
- **Wishlist**: Save favorite products
- **Search**: Product and article search
- **Newsletter**: Email subscription with preferences
- **Deals Section**: Featured deals and promotions

### SEO & Performance
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Fast Performance**: Optimized images, code splitting, caching
- **Mobile Responsive**: Perfect on all devices
- **Accessibility**: WCAG 2.1 compliant

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **AI**: OpenAI GPT-4
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or Atlas)
- OpenAI API key (optional, for AI features)

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd /path/to/ecommerce-blog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ecommerce_blog
   OPENAI_API_KEY=sk-your-key-here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ecommerce-blog/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage with blog + products
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Header.tsx          # Navigation with cart, search
│   ├── Footer.tsx          # Footer with policies
│   ├── BlogCard.tsx        # Blog post card component
│   ├── ProductCard.tsx     # Product display card
│   └── ReviewSection.tsx   # Customer reviews
├── lib/
│   ├── db.ts              # MongoDB setup and schemas
│   └── openai.ts          # OpenAI integration
└── public/                # Static assets
```

## Database Schema

### Blog Posts
- Title, content, excerpt
- Author information
- Category and tags
- Product mentions (linked products)
- SEO metadata
- Publication status

### Products
- Name, description, pricing
- Images and specifications
- Category and brand
- Stock status
- Ratings and review count
- Affiliate links (optional)

### Reviews
- Product and user references
- Rating and comment
- Verified purchase status
- Helpful votes

### Categories
- Name and slug
- Parent/child relationships
- Product and post counts

## Customization

### Branding
Edit the brand name and colors in:
- `/components/Header.tsx` - Change "SHOPWISE" text
- `/app/globals.css` - Update color variables
- `/tailwind.config.ts` - Modify theme colors

### Color Scheme
The template uses emerald (#10b981) as the primary color. To change:
```css
/* In globals.css */
:root {
  --color-primary: #10b981; /* Change this */
}
```

### Content
Replace sample content in:
- `/app/page.tsx` - Update featured posts and products
- `/components/ReviewSection.tsx` - Add real reviews

## AI Features Usage

### Generate Product Description
```typescript
import { generateProductDescription } from '@/lib/openai'

const description = await generateProductDescription(
  'Smart Watch Pro',
  ['Heart rate monitor', 'GPS tracking', 'Water resistant'],
  'Wearables'
)
```

### Generate Blog Outline
```typescript
import { generateBlogOutline } from '@/lib/openai'

const outline = await generateBlogOutline(
  'Best Fitness Trackers 2024',
  ['Smart Watch Pro', 'Fitness Band X'],
  ['fitness tracker', 'heart rate', 'GPS']
)
```

### Summarize Reviews
```typescript
import { summarizeReviews } from '@/lib/openai'

const summary = await summarizeReviews([
  { rating: 5, comment: 'Great product!' },
  { rating: 4, comment: 'Good value for money' }
])
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
Build the production version:
```bash
npm run build
npm start
```

## Environment Variables

Required:
- `MONGODB_URI` - MongoDB connection string
- `OPENAI_API_KEY` - OpenAI API key (for AI features)
- `NEXT_PUBLIC_APP_URL` - Your site URL

Optional:
- Email configuration (SMTP)
- Analytics (Google Analytics)
- Payment processing (Stripe)
- Cloud storage (AWS S3)

## Best Practices

### Content Marketing
1. **Balance Content & Products**: 70% value, 30% product promotion
2. **Natural Integration**: Mention products where relevant
3. **Authentic Reviews**: Use real customer feedback
4. **SEO Optimization**: Target long-tail keywords

### Product Recommendations
1. **Test Products**: Only recommend tested items
2. **Transparent Disclosures**: Mention affiliate relationships
3. **Update Regularly**: Keep prices and availability current
4. **Honest Reviews**: Include pros and cons

### Performance
1. **Optimize Images**: Use WebP format, lazy loading
2. **Cache Content**: Implement Redis for frequently accessed data
3. **CDN**: Use Vercel or Cloudflare CDN
4. **Database Indexes**: Ensure proper MongoDB indexes

## Features Roadmap

- [ ] User authentication and accounts
- [ ] Advanced product filtering
- [ ] Comparison tool
- [ ] Price tracking and alerts
- [ ] Editorial calendar
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Dark mode

## Support & Documentation

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **MongoDB Docs**: [mongodb.com/docs](https://mongodb.com/docs)
- **OpenAI Docs**: [platform.openai.com/docs](https://platform.openai.com/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

MIT License - feel free to use this template for personal or commercial projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with care for smart shoppers and content marketers.**
