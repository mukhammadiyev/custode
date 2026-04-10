import { useTranslation } from 'react-i18next'
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import Logo from '../../../public/images/logo/Logo.svg'
import useDevice from '../../hooks/useDevice'

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
					<h2
						className='
						text-2xl
						lg:text-4xl
						xl:text-6xl
						font-extrabold
						text-white
						leading-tight
						'
					>
						{t('thoughts.title')}
					</h2>

					<p
						className='
						text-gray-300
						text-sm
						lg:text-lg
						xl:text-2xl
						leading-6
						lg:leading-8
						xl:leading-9
						max-w-md
						'
					>
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

				{/* Slider */}
				<div className='relative w-full h-67.5 sm:h-70 md:h-115 lg:h-130 xl:h-155 flex items-center'>
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
						className='h-full w-full static!'
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={index}>
								<div className='bg-white w-full lg:w-11/12 p-4 lg:p-5 xl:p-7 flex flex-col gap-5 h-full justify-between'>
									<div className='text-[#00a99d]'>
										<svg width='45' height='35' viewBox='0 0 45 35' fill='none'>
											<path
												d='M0 35H15.75L20.25 21.875V0H0V35ZM24.75 0V21.875L29.25 35H45V0H24.75Z'
												fill='currentColor'
											/>
										</svg>
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
													{/* Filled Stars */}
													<span className='text-orange-400'>
														{'★'.repeat(review.stars)}
													</span>

													{/* Empty Stars (Gray) */}
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
						{/* Pagination */}
					<div
						className='
						custom-pagination-container
						absolute
						left-1/3 
						-bottom-6
						flex flex-row gap-3
						z-30
						lg:left-auto
						lg:right-0
						lg:top-1/2
						lg:-translate-y-1/3
						lg:translate-x-0
						lg:bottom-auto
						lg:flex-col
						'
					/>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Thoughts
