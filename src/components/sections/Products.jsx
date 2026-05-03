import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'

// Receive searchQuery as a prop from App.js
const Products = ({ searchQuery = '' }) => {
  const { t } = useTranslation()
  
  const [visibleCount, setVisibleCount] = useState(3)
  const [isMobile, setIsMobile] = useState(false)
  const [isHiding, setIsHiding] = useState(false)

  const fakeProducts = [
    { id: 1, img: '/images/products/product_one.webp', code: 'MS 212 C-BE' },
    { id: 2, img: '/images/products/product_two.webp', code: 'MS 212 C-FE' },
    { id: 3, img: '/images/products/product_three.webp', code: 'MS 150 C-RE' },
    { id: 4, img: '/images/products/product_four.webp', code: 'MS 212 C-GE' },
    { id: 5, img: '/images/products/product_five.webp', code: 'MS 200 C-BE' },
    { id: 6, img: '/images/products/product_six.webp', code: 'MS 212 C-BE' },
    { id: 7, img: '/images/products/product_seven.webp', code: 'MS 430 C-BE' },
    { id: 8, img: '/images/products/product_eight.webp', code: 'MS 212 C-BE' },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleToggle = () => {
    if (!isHiding) {
      const nextCount = visibleCount + 3
      if (nextCount >= fakeProducts.length) {
        setVisibleCount(fakeProducts.length)
        setIsHiding(true)
      } else {
        setVisibleCount(nextCount)
      }
    } else {
      const nextCount = visibleCount - 1
      if (nextCount <= 3) {
        setVisibleCount(3)
        setIsHiding(false)
      } else {
        setVisibleCount(nextCount)
      }
    }
  }

  // --- SEARCH LOGIC ---
  
  // 1. Filter products based on search query (case-insensitive)
  const filteredProducts = fakeProducts.filter(product =>
    product.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // 2. Check if user is currently searching
  const isSearching = searchQuery.trim().length > 0

  // 3. Determine which products to show
  // If searching: Show all filtered results
  // If not searching: Show limited products on mobile, all on desktop
  const displayedProducts = isSearching 
    ? filteredProducts 
    : (isMobile ? fakeProducts.slice(0, visibleCount) : fakeProducts)

  return (
    <section id='products' className='scroll-mt-24 font-manrope w-full bg-dark-brown'>
      <div className='container mx-auto'>
        <div className="py-0 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-65 w-full">
          <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold leading-8 md:leading-12 lg:leading-15 2xl:leading-18 mb-4 md:mb-6 2xl:mb-7.5'>
            {t('products.title')}
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 2xl:gap-x-6 2xl:gap-y-7.5'>
            {displayedProducts.map(product => (
              <ProductCard
                key={product.id}
                image={product.img}
                modelCode={product.code}
              />
            ))}
            
            {/* Only show the toggle button if:
               1. We are on mobile
               2. We are NOT currently searching (so results aren't cut off)
               3. There are actually products to toggle
            */}
            {isMobile && !isSearching && fakeProducts.length > 3 && (
              <Button onClick={handleToggle} className='mt-1 sm:hidden'>
                {!isHiding ? t('products.moreView') : t('products.lessView')}
              </Button>
            )}
          </div>

          {/* Optional: Show "No results" message if search matches nothing */}
          {isSearching && filteredProducts.length === 0 && (
            <div className="text-white text-center py-10 opacity-60">
              {t('products.no_results') || 'No products found'}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Products