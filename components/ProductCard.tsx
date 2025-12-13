import { Star, ShoppingCart, Heart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-gray-300 fill-gray-300 absolute" />
          <div className="overflow-hidden w-1/2 absolute">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />
      )
    }

    return stars
  }

  return (
    <div className="product-card group bg-gray-900 border-gray-700">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <div className="product-badge bg-emerald-600 text-white">
            {product.badge}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
          <a href={`/product/${product.id}`}>{product.name}</a>
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-400">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-emerald-400">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <button className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
