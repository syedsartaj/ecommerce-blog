import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    role: 'Verified Buyer',
    rating: 5,
    comment: 'ShopWise has become my go-to resource before making any purchase. Their reviews are thorough, honest, and have saved me from several bad buys. The product recommendations are always spot-on!',
    image: 'https://i.pravatar.cc/150?img=1',
    product: 'Smart Home Guide',
  },
  {
    id: 2,
    name: 'Robert Thompson',
    role: 'Regular Subscriber',
    rating: 5,
    comment: "I've been following ShopWise for over a year now. The buying guides are incredibly detailed and the comparison articles help me make informed decisions. Love the weekly newsletter with exclusive deals!",
    image: 'https://i.pravatar.cc/150?img=12',
    product: 'Tech Reviews',
  },
  {
    id: 3,
    name: 'Amanda Lee',
    role: 'Verified Buyer',
    rating: 5,
    comment: 'The product reviews on ShopWise are unbiased and comprehensive. I particularly appreciate how they test products in real-world scenarios. Helped me choose the perfect kitchen appliances!',
    image: 'https://i.pravatar.cc/150?img=5',
    product: 'Kitchen Gadgets',
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    role: 'Deal Hunter',
    rating: 5,
    comment: 'ShopWise alerts me to amazing deals I would have never found on my own. Their team clearly does extensive research, and the money-saving tips are invaluable. Highly recommend subscribing!',
    image: 'https://i.pravatar.cc/150?img=13',
    product: 'Daily Deals',
  },
  {
    id: 5,
    name: 'Sophia Rodriguez',
    role: 'Verified Buyer',
    rating: 5,
    comment: 'As someone who loves fashion but wants to shop sustainably, ShopWise has been a game-changer. Their eco-friendly product recommendations align perfectly with my values. Great content!',
    image: 'https://i.pravatar.cc/150?img=9',
    product: 'Sustainable Fashion',
  },
  {
    id: 6,
    name: 'Daniel Kim',
    role: 'Tech Enthusiast',
    rating: 5,
    comment: "The depth of their tech reviews is impressive. They cover everything from specs to real-world performance. I won't buy any gadget without checking ShopWise first. Five stars!",
    image: 'https://i.pravatar.cc/150?img=14',
    product: 'Electronics',
  },
]

export default function ReviewSection() {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? 'fill-emerald-500 text-emerald-500'
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div key={review.id} className="review-card relative">
          {/* Quote Icon */}
          <div className="absolute -top-3 -left-3 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-emerald-600" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {renderStars(review.rating)}
          </div>

          {/* Comment */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            "{review.comment}"
          </p>

          {/* Reviewer Info */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
            />
            <div>
              <p className="font-semibold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>

          {/* Product Tag */}
          <div className="mt-3">
            <span className="inline-block text-xs font-medium px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">
              {review.product}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
