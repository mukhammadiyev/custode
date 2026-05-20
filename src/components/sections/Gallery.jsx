import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoImageSharp } from 'react-icons/io5'

const Gallery = () => {
	const { t } = useTranslation()

	// Number of images to show initially. 6 works perfectly for a 3-column grid.
	const INITIAL_LIMIT = 3
	const [isExpanded, setIsExpanded] = useState(false)

	const MainImages = {
		mainOne: '/images/gallery/gallery_main.webp', // Large Top-Left
		mainTwo: '/images/gallery/gallery_main_two.webp', // Large Bottom-Right
	}

	const images = [
		{ imgSrc: '/images/gallery/gallery(1).webp', id: 1 },
		{ imgSrc: '/images/gallery/gallery(6).webp', id: 6 },
		{ imgSrc: '/images/gallery/gallery(7).webp', id: 7 },
		{ imgSrc: '/images/gallery/gallery(9).webp', id: 9 },
		{ imgSrc: '/images/gallery/gallery(11).webp', id: 11 },
		{ imgSrc: '/images/gallery/gallery(12).webp', id: 12 },
		{ imgSrc: '/images/gallery/gallery(13).webp', id: 13 },
		{ imgSrc: '/images/gallery/gallery(14).webp', id: 14 },
		{ imgSrc: '/images/gallery/gallery(15).webp', id: 15 },
		{ imgSrc: '/images/gallery/gallery(16).webp', id: 16 },
		{ imgSrc: '/images/gallery/gallery(17).webp', id: 17 },
		{ imgSrc: '/images/gallery/gallery(18).webp', id: 18 },
		{ imgSrc: '/images/gallery/gallery(20).webp', id: 20 },
		{ imgSrc: '/images/gallery/gallery(21).webp', id: 21 },
		{ imgSrc: '/images/gallery/gallery(22).webp', id: 22 },
		{ imgSrc: '/images/gallery/gallery(23).webp', id: 23 },
		{ imgSrc: '/images/gallery/gallery(25).webp', id: 25 },
		{ imgSrc: '/images/gallery/gallery(28).webp', id: 28 },
		{ imgSrc: '/images/gallery/gallery(10).webp', id: 10 },
		{ imgSrc: '/images/gallery/gallery(29).webp', id: 29 },
		{ imgSrc: '/images/gallery/gallery(30).webp', id: 30 },
		{ imgSrc: '/images/gallery/gallery(31).webp', id: 31 },
		{ imgSrc: '/images/gallery/gallery(32).webp', id: 32 },
		{ imgSrc: '/images/gallery/gallery(35).webp', id: 35 },
		{ imgSrc: '/images/gallery/gallery(36).webp', id: 36 },
		{ imgSrc: '/images/gallery/gallery(37).webp', id: 37 },
		{ imgSrc: '/images/gallery/gallery(39).webp', id: 39 },
		{ imgSrc: '/images/gallery/gallery(40).webp', id: 40 },
		{ imgSrc: '/images/gallery/gallery(45).webp', id: 45 },
	]

	// Slice array depending on state toggled by the user
	const visibleImages = isExpanded ? images : images.slice(0, INITIAL_LIMIT)

	return (
		<div
			id='gallery'
			className='scroll-mt-20 w-full bg-light-brown md:bg-transparent'
		>
			<div className='container mx-auto py-5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-65'>
				<div className='flex flex-col gap-5 md:gap-7.5 font-manrope'>
					<h2 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white leading-tight'>
						{t('gallery.title')}
					</h2>

					<div className='grid grid-cols-1 gap-4'>
						{/* Main Featured Images */}
						<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:auto-rows-[200px]'>
							<div className='md:col-span-1 md:row-span-2 overflow-hidden'>
								<img
									src={MainImages.mainOne}
									alt='Main focus 1'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='md:col-span-1 hidden md:block md:row-span-2 overflow-hidden'>
								<img
									src={MainImages.mainTwo}
									alt='Main focus 2'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
						</div>

						{/* Secondary Image Grid */}
						<div className='w-full grid grid-cols-3 gap-4 auto-rows-[120px] md:auto-rows-[200px] lg:auto-rows-[300px] xl:auto-rows-[400px]'>
							{visibleImages.map(img => (
								<div
									key={img.id}
									className='md:col-span-1 md:row-span-1 overflow-hidden'
								>
									<img
										src={img.imgSrc}
										alt={`Gallery item ${img.id}`}
										className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
									/>
								</div>
							))}
						</div>
					</div>

					{/* Action Buttons Container */}
					<div className='flex flex-wrap gap-4 items-center mt-2'>
						{/* Conditionally show toggle button if there are more images than the limit */}
						{images.length > INITIAL_LIMIT && (
							<button
								type='button'
								onClick={() => setIsExpanded(!isExpanded)}
								aria-label='show more/less images'
								className='flex items-center gap-2.5 justify-between w-fit border border-light-blue bg-transparent px-5 py-2 lg:text-sm text-xs text-white hover:bg-light-blue transition-colors cursor-pointer font-medium'
							>
								{isExpanded
									? t('gallery.showLess')
									: t('gallery.showMore')}
							</button>
						)}

						{/* External Link Button */}
						<a
							href='https://t.me/custodelock'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button
								type='button'
								aria-label='view gallery'
								className='flex items-center gap-2.5 justify-between w-fit border border-light-blue bg-transparent px-5 py-2 lg:text-sm text-xs text-white hover:bg-light-blue transition-colors cursor-pointer font-medium'
							>
								<IoImageSharp className='w-3 md:w-4 h-3 md:h-4' />
								{t('gallery.view')}
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
