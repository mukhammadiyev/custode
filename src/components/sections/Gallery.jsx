import { useTranslation } from 'react-i18next'
import { IoImageSharp } from 'react-icons/io5'
const Gallery = () => {
	const { t } = useTranslation()

	const images = {
		mainOne: '/images/gallery/gallery_main.webp', // Large Top-Left
		mainTwo: '/images/gallery/gallery_main_two.webp', // Large Bottom-Right
		secOne: '/images/gallery/gallery_sec_one.webp', // Small Top-Right
		secTwo: '/images/gallery/gallery_sec_two.webp', // Small Middle-Right
		secThree: '/images/gallery/gallery_sec_three.webp', // Small Bottom-Left
	}

	return (
		<div id='gallery' className='scroll-mt-20 w-full bg-light-brown md:bg-transparent'>
			<div className='container mx-auto py-5 px-4 sm:px-6 md:px-8  lg:px-10 xl:px-16 2xl:px-24 3xl:px-65'>
				<div className='flex flex-col gap-5 md:gap-7.5 font-manrope'>
					<h2
						className='text-2xl
						lg:text-4xl
						xl:text-6xl
						font-extrabold
						text-white leading-tight'
					>
						{t('gallery.title')}
					</h2>
					<div className='grid grid-cols-1 gap-4 '>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:auto-rows-[200px]'>
							<div className='md:col-span-1 md:row-span-2 overflow-hidden'>
								<img
									src={images.mainOne}
									alt='Main focus 1'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='md:col-span-1 hidden md:block md:row-span-2 overflow-hidden'>
								<img
									src={images.mainTwo}
									alt='Main focus 2'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
						</div>
						<div className='w-full grid grid-cols-3 gap-4 md:auto-rows-[200px]'>
							<div className='md:col-span-1 md:row-span-1 overflow-hidden'>
								<img
									src={images.secOne}
									alt='Secondary 1'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='md:col-span-1 md:row-span-1 overflow-hidden'>
								<img
									src={images.secTwo}
									alt='Secondary 2'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='md:col-span-1 md:row-span-1 overflow-hidden'>
								<img
									src={images.secThree}
									alt='Secondary 3'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
								/>
							</div>
						</div>
					</div>
					<button aria-label='view gallery' className='flex items-center gap-2.5 justify-between w-fit border border-light-blue bg-transparent px-5 py-2 lg:text-sm text-xs text-white hover:bg-light-blue transition-colors group-hover:border-light-blue cursor-pointer'>
						<IoImageSharp className='w-3 md:w-4 h-3 md:h-4' />
						{t('gallery.view')}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Gallery
