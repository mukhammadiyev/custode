import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import { FaChevronRight } from "react-icons/fa";

function Hero() {
  const { t } = useTranslation()

  return (
    <div className='relative w-full overflow-hidden'>
      {/* 1. ASOSIY RASM (LCP): 
        Brauzer buni HTML darajasidayoq ko'rishi uchun <img> tegi ishlatildi.
        fetchpriority="high" - bu Lighthouse ballini oshirish uchun eng muhim qism.
      */}
      <img 
        src="/images/hero/header_image.webp" 
        alt="Hero background"
        fetchpriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. GRADIENT QATLAM (OVERLAY): Rasm ustidagi qorong'ulash */}
      <div className='absolute inset-0 bg-linear-to-r from-light-brown lg:via-black/80 via-black/60 to-transparent'></div>

      {/* 3. CONTENT: Matnlar va Tugma */}
      <div className='container mx-auto relative z-10 flex items-center justify-start h-full'>
        <div
          className='
          py-10 lg:py-24 xl:py-28 2xl:py-32
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24
          max-w-full'
        >
          <div className='max-w-60 sm:max-w-70 lg:max-w-70 xl:max-w-120 2xl:max-w-140 flex flex-col'>
            
            {/* Title */}
            <h1
              className='
              text-2xl sm:text-3xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl
              text-white drop-shadow-2xl font-bold
              leading-8 lg:leading-tight
              mb-3 lg:mb-6'
            >
              {t('hero.title')}
            </h1>

            {/* Description */}
            <p
              className='
              text-xs sm:text-sm md:text-base
              lg:text-lg xl:text-xl
              leading-relaxed text-white/90 w-full
              mb-5 lg:mb-10'
            >
              {t('hero.description')}
            </p>

            <Button>
              {t('hero.cta')} <FaChevronRight className="inline ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero