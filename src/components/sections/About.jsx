import { useTranslation } from 'react-i18next'
import useDevice from '../../hooks/useDevice'

export const About = () => {
	const { t } = useTranslation()
	const isMobile = useDevice()

	return (
		<section id='about' className='scroll-mt-24 w-full bg-light-brown text-white '>
			<div className='container mx-auto'>
				<div
					className='
					py-8 lg:py-16 xl:py-20 2xl:py-24
					px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24
					max-w-full
					flex flex-col lg:flex-row
					items-stretch justify-between
					gap-6 lg:gap-10 xl:gap-12
					'
				>
					{/* Left side */}
					<div className='flex-1 rounded-lg flex items-center justify-center'>
						<img
							src="/images/about/about_image.webp"
							alt="About"
							className="w-full h-auto"
						/>
					</div>

					{/* Right side */}
					<div className='flex-1 flex flex-col justify-center font-manrope'>
						<h2
							className='
							text-2xl sm:text-3xl md:text-4xl
							lg:text-4xl xl:text-4xl 2xl:text-[40px]
							font-extrabold text-light-blue
							mb-4 lg:mb-8 xl:mb-8
							max-w-xl
							leading-8 lg:leading-tight
							'
						>
							{t('about.title')}
						</h2>

						<p
							className='
							text-sm sm:text-base md:text-base
							lg:text-lg xl:text-lg
							text-[#DFE0EC]
							mb-4 lg:mb-6 xl:mb-6
							leading-6 lg:leading-8
							'
						>
							{t('about.description')}
						</p>

						<div className='grid grid-cols-3 gap-2 lg:gap-4'>
							<div className='text-center p-2 lg:p-3 bg-dark-brown'>
								<p
									className='
									text-[10px] sm:text-xs md:text-sm
									lg:text-sm
									text-white
									leading-4 lg:leading-5
									h-8 lg:h-12
									flex items-center justify-center flex-wrap
									'
								>
									{t('about.stats.founded')}
								</p>
								<p className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-light-blue mt-auto'>
									2015
								</p>
							</div>

							<div className='text-center p-2 lg:p-3 bg-dark-brown'>
								<p
									className='
									text-[10px] sm:text-xs md:text-sm
									lg:text-sm
									text-white
									leading-4 lg:leading-5
									h-8 lg:h-12
									flex items-center justify-center flex-wrap
									'
								>
									{t('about.stats.employees')}
								</p>
								<p className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-light-blue mt-auto'>
									44
								</p>
							</div>

							<div className='text-center p-2 lg:p-3 bg-dark-brown'>
								<p
									className='
									text-[10px] sm:text-xs md:text-sm
									lg:text-sm
									text-white
									leading-4 lg:leading-5
									h-8 lg:h-12
									flex items-center justify-center flex-wrap
									'
								>
									{t('about.stats.importers')}
								</p>
								<p className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-light-blue mt-auto'>
									120
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About