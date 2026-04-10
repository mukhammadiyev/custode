import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Logo from '../../../public/images/logo/Logo.svg'
import useDevice from '../../hooks/useDevice'
import Quote from '../../../public/images/reviews/Quote.svg'

const Thoughts = () => {
	const { t } = useTranslation()
	const isMobile = useDevice()

	const reviewsData = t('thoughts.items', { returnObjects: true })
	const reviews = Array.isArray(reviewsData) ? reviewsData : []

	return (
		<section
			id='thoughts'
			className='scroll-mt-24 bg-light-brown overflow-hidden'
		>
			<div
				className='
        container mx-auto
        grid grid-cols-1 lg:grid-cols-2
        gap-8 lg:gap-12
        items-center
        pt-5 pb-10 lg:py-0
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24
        '
			>
				{/* Left */}
				<div className='space-y-4 lg:space-y-7 font-manrope lg:pr-10'>
					<h2 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white leading-tight'>
						{t('thoughts.title')}
					</h2>

					<p className='text-gray-300 text-sm lg:text-lg xl:text-2xl leading-6 lg:leading-8 xl:leading-9 max-w-md'>
						{t('thoughts.description')}
					</p>

					<div className='w-full pt-4 lg:pt-7 border-t border-light-blue'>
						<img
							src={Logo}
							className='w-24 lg:w-36 xl:w-45 h-6 lg:h-9 xl:h-11'
							alt=''
						/>
					</div>
				</div>

				{/* Slider Section */}
				<div className='relative w-full h-67.5 sm:h-70 md:h-115 lg:h-130 xl:h-155 flex flex-col justify-center items-center'>
					<Swiper
						key={isMobile ? 'mobile' : 'desktop'}
						direction={isMobile ? 'horizontal' : 'vertical'}
						slidesPerView={isMobile ? 1 : 1.95}
						centeredSlides={!isMobile}
						spaceBetween={20}
						loop={false}
						mousewheel={!isMobile}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						pagination={{
							clickable: true,
							el: '.custom-pagination-container',
							bulletClass: 'custom-bullet',
							bulletActiveClass: 'custom-bullet-active',
						}}
						modules={[Pagination, Autoplay, Mousewheel]}
						className='h-full w-full overflow-visible!'
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={index}>
								{/* SIZNING ASL KARTA DIZAYNINGIZ */}
								<div className='bg-white w-full lg:w-11/12 p-4 lg:p-5 xl:p-7 flex flex-col gap-5 h-full justify-between'>
									<div>
										{/* SVG O'RNIGA RASM QO'YILDI */}
										<img
											src={Quote}
											className='w-10 lg:w-11 xl:w-12 h-auto'
											alt='Quote'
										/>
									</div>

									<p className='text-gray-700 text-xs lg:text-xs xl:text-base leading-relaxed'>
										{review.text}
									</p>

									<div className='pt-5 flex items-center gap-4 border-t border-light-blue'>
										<div className='w-12 h-12 rounded-full overflow-hidden'>
											<img
												className='w-full h-full object-cover'
												src={
													review.image ||
													`https://ui-avatars.com/api/?name=${review.name}&background=random`
												}
												alt={review.name}
											/>
										</div>

										<div>
											<h4 className='font-bold text-gray-900 text-sm lg:text-sm xl:text-base'>
												{review.name}
											</h4>

											<div className='flex items-center gap-2'>
												<div className='flex text-[10px] lg:text-xs'>
													<span className='text-orange-400'>
														{'★'.repeat(review.stars)}
													</span>
													<span className='text-gray-300'>
														{'★'.repeat(5 - review.stars)}
													</span>
												</div>
												<span className='text-gray-400 text-[10px] lg:text-xs'>
													{review.time}
												</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* PAGINATION KONTEYNERI - Endi u Swiper tegidan tashqarida */}
					<div className='custom-pagination-container' />
				</div>
			</div>
		</section>
	)
}

export default Thoughts
