import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../../public/images/logo/Logo.svg'
import mobileLogo from '../../../public/images/logo/logo_mobile.svg'

import { IoChevronBack, IoClose, IoMenu, IoSearch } from 'react-icons/io5'
import useDevice from '../../hooks/useDevice'
import SearchInput from '../ui/SearchInput'

function Navbar({ onSearchChange }) {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
	const [history, setHistory] = useState([])
	const { t, i18n } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const isMobile = useDevice()

	// Load history from localStorage on mount
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('searchHistory') || '[]')
		setHistory(saved)
	}, [])

	// Lock body scroll when modal is open to prevent background scrolling
	useEffect(() => {
		if (isSearchModalOpen || mobileOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isSearchModalOpen, mobileOpen])

	const languages = [
		{
			code: 'uz',
			visibleCode: 'Uzb',
			label: "O'zbekcha",
			img: '/images/flags/uz_flag.svg',
		},
		{
			code: 'ru',
			visibleCode: 'rus',
			label: 'Русский',
			img: '/images/flags/ru_flag.svg',
		},
		{
			code: 'en',
			visibleCode: 'eng',
			label: 'English',
			img: '/images/flags/en_flag.svg',
		},
		{
			code: 'it',
			visibleCode: 'ita',
			label: 'Italiano',
			img: '/images/flags/it_flag.svg',
		},
	]

	const currentLang =
		languages.find(l => l.code === i18n.language) || languages[0]

	const changeLanguage = code => {
		i18n.changeLanguage(code)
		setIsOpen(false)
	}

	// --- SEARCH LOGIC ---
	const handleSearchCommit = value => {
		if (!value.trim()) return
		onSearchChange(value)

		// Add to history (prevent duplicates, keep max 5)
		const newHistory = [value, ...history.filter(h => h !== value)].slice(0, 5)
		setHistory(newHistory)
		localStorage.setItem('searchHistory', JSON.stringify(newHistory))

		setIsSearchModalOpen(false) // Close modal after selection
	}

	const clearHistory = () => {
		setHistory([])
		localStorage.removeItem('searchHistory')
	}

	const removeHistoryItem = item => {
		const newH = history.filter(h => h !== item)
		setHistory(newH)
		localStorage.setItem('searchHistory', JSON.stringify(newH))
	}

	return (
		<nav className='w-full bg-light-brown border-b border-[#575757] shadow-sm sticky top-0 z-9999'>
			<div className='container mx-auto'>
				<div
					className='w-full flex bg-light-brown items-center justify-between
          py-3.5 lg:py-4 xl:py-5 2xl:py-7
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24
          max-w-full'
				>
					{/* logo */}
					<div className='relative'>
						<img
							src={isMobile ? mobileLogo : logo}
							alt='logo'
							className='md:w-24 lg:w-32 xl:w-36 2xl:w-45 h-7 lg:h-9 xl:h-10 2xl:h-11'
						/>
						<div className='absolute bottom-0 md:-bottom-px lg:bottom-0 2xl:-bottom-0.5 left-8 md:right-0 xl:right-0 flex items-center md:justify-end '>
							<span className='w-3.5 md:w-6 lg:w-7.5 xl:w-8.5 2xl:w-10.5 h-px lg:h-0.5 xl:h-0.75 2xl:h-0.75 bg-green-600'></span>
							<span className='w-3.5 md:w-6 lg:w-7.5 xl:w-8.5 2xl:w-10.5 h-px lg:h-0.5 xl:h-0.75 2xl:h-0.75 bg-white'></span>
							<span className='w-3.5 md:w-6 lg:w-7.5 xl:w-8.5 2xl:w-10.5 h-px lg:h-0.5 xl:h-0.75 2xl:h-0.75 bg-red-600'></span>
						</div>
					</div>

					{/* menu */}
					<ul
						className='hidden lg:flex items-center
            lg:gap-6 xl:gap-8 2xl:gap-12
            lg:text-base xl:text-lg 2xl:text-xl
            font-manrope text-white cursor-pointer'
					>
						<li>
							<a href='#about'>{t('nav.about')}</a>
						</li>
						<li>
							<a href='#products'>{t('nav.products')}</a>
						</li>
						<li>
							<a href='#thoughts'>{t('nav.thoughts')}</a>
						</li>
						<li>
							<a href='#gallery'>{t('nav.gallery')}</a>
						</li>
						<li>
							<a href='#contact'>{t('nav.contact')}</a>
						</li>
					</ul>

					{/* desktop actions */}
					<div className='hidden lg:flex items-center lg:gap-6 xl:gap-7 2xl:gap-8'>
						<SearchInput onSearchChange={onSearchChange} t={t} />

						<div className='relative inline-block text-left'>
							{isOpen && (
								<>
									<div
										className='fixed bottom-0 z-10'
										onClick={() => setIsOpen(false)}
									></div>

									<div className='absolute left-0 mt-2 top-8 w-30 bg-light-brown border-transparent text-white shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200'>
										{languages.map(
											lang =>
												lang.code !== currentLang.code && (
													<button
														aria-label={`switch language to ${lang.label}`}
														key={lang.code}
														onClick={() => changeLanguage(lang.code)}
														className={`w-full flex items-center gap-3 px-4 py-3 transition-colors last:border-none cursor-pointer ${
															i18n.language === lang.code
																? 'bg-light-brown/30'
																: ''
														}`}
													>
														<img
															src={lang.img}
															alt={lang.label}
															className='w-6 h-4 object-cover rounded-sm shadow-sm'
														/>
														<span
															className={`font-medium capitalize ${
																i18n.language === lang.code
																	? 'text-white'
																	: 'text-white/80'
															}`}
														>
															{lang.visibleCode}
														</span>
													</button>
												),
										)}
									</div>
								</>
							)}

							<button
								aria-label='toggle language selector'
								onClick={() => setIsOpen(!isOpen)}
								className='flex items-center gap-3 bg-transparent px-4 py-2 border-b border-transparent hover:shadow-sm transition-all cursor-pointer'
							>
								<img
									src={currentLang.img}
									alt={currentLang.label}
									className='w-6 h-4 object-cover rounded-sm'
								/>
								<span className='font-bold font-manrope capitalize text-white'>
									{currentLang.visibleCode}
								</span>
								<svg
									className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
										isOpen ? 'rotate-180' : ''
									}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* mobile actions */}
					<div className='lg:hidden flex items-center gap-3.5'>
						{/* TRIGGER SEARCH MODAL */}
						<button
							aria-label='open search modal'
							onClick={() => setIsSearchModalOpen(true)}
						>
							<IoSearch className='w-4.5 h-4.5 text-white font-bold' />
						</button>

						<div className='relative inline-block text-left'>
							{isOpen && (
								<>
									<div
										className='fixed bottom-0 z-10'
										onClick={() => setIsOpen(false)}
									></div>

									<div className='absolute left-0 mt-2 top-8 w-max bg-light-brown border-transparent text-white shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200'>
										{languages.map(
											lang =>
												lang.code !== currentLang.code && (
													<button
														aria-label={`switch language to ${lang.label}`}
														key={lang.code}
														onClick={() => changeLanguage(lang.code)}
														className={`w-full flex items-center gap-2 px-2 py-2 transition-colors last:border-none cursor-pointer ${
															i18n.language === lang.code
																? 'bg-light-brown/30'
																: ''
														}`}
													>
														<img
															src={lang.img}
															alt={lang.label}
															className='w-6 h-4 object-cover rounded-sm shadow-sm'
														/>
														<span
															className={`font-medium capitalize text-base ${
																i18n.language === lang.code
																	? 'text-white'
																	: 'text-white/80'
															}`}
														>
															{lang.visibleCode}
														</span>
													</button>
												),
										)}
									</div>
								</>
							)}

							<button
								aria-label='toggle language selector'
								onClick={() => setIsOpen(!isOpen)}
								className='flex items-center gap-2 bg-transparent px-0 py-0 border-b border-transparent hover:shadow-sm transition-all cursor-pointer'
							>
								<img
									src={currentLang.img}
									alt={currentLang.label}
									className='w-6 h-4 object-cover rounded-sm'
								/>
								<span className='font-extrabold font-manrope capitalize text-white text-base'>
									{currentLang.visibleCode}
								</span>
							</button>
						</div>

						<button
							aria-label='open menu'
							className='w-9 h-9 rounded-full bg-[#FFF5ED] flex items-center justify-center'
							onClick={() => setMobileOpen(true)}
						>
							<IoMenu className='w-5 h-5 font-bold text-light-blue' />
						</button>

						{/* MOBILE MENU DRAWER */}
						{mobileOpen && (
							<div className='fixed inset-0 z-50 bg-dark-brown flex flex-col'>
								{/* top bar */}
								<div className='flex justify-between items-center p-6 bg-light-brown'>
									<button
										aria-label='back to home'
										className='text-white text-2xl flex items-center gap-2'
										onClick={() => setMobileOpen(false)}
									>
										<IoChevronBack className='w-6 h-6' />
										{t('nav.back')}
									</button>
								</div>

								{/* center links */}
								<nav className='p-5 flex-1 flex flex-col gap-6 text-white text-xl font-medium'>
									<a
										href='#about'
										onClick={() => setMobileOpen(false)}
										className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full active:after:w-full"
									>
										{t('nav.about')}
									</a>

									<a
										href='#products'
										onClick={() => setMobileOpen(false)}
										className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full active:after:w-full"
									>
										{t('nav.products')}
									</a>

									<a
										href='#thoughts'
										onClick={() => setMobileOpen(false)}
										className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full active:after:w-full"
									>
										{t('nav.thoughts')}
									</a>

									<a
										href='#gallery'
										onClick={() => setMobileOpen(false)}
										className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full active:after:w-full"
									>
										{t('nav.gallery')}
									</a>

									<a
										href='#contact'
										onClick={() => setMobileOpen(false)}
										className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full active:after:w-full"
									>
										{t('nav.contact')}
									</a>
								</nav>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* --- SEARCH MODAL (MOBILE ONLY OVERLAY) --- */}
			{isSearchModalOpen && (
				<div className='fixed inset-0 z-100 bg-[#121212] flex flex-col animate-in fade-in duration-200 font-manrope'>
					{/* top bar */}
					<div className='flex items-center gap-3 p-4 bg-[#1a1a1a] border-b border-gray-800'>
						<div className='relative flex-1'>
							<IoSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
							<input
								autoFocus
								type='text'
								placeholder={t('nav.search')}
								className='w-full bg-[#2a2a2a] text-white pl-10 pr-4 py-2.5 rounded-lg outline-none text-base'
								onKeyDown={e => {
									if (e.key === 'Enter') handleSearchCommit(e.target.value)
								}}
							/>
						</div>
						<button
							aria-label='back to home'
							onClick={() => {
								setIsSearchModalOpen(false)
								onSearchChange('')
							}}
							className='bg-[#00A3A3] text-white px-5 py-2 rounded-lg text-sm font-bold'
						>
							{t('nav.back')}
						</button>
					</div>

					{/* history content */}
					<div className='flex-1 p-6 overflow-y-auto'>
						<div className='flex justify-between items-center mb-6'>
							<h3 className='text-white font-bold text-lg'>
								{t('nav.previousSearches')}
							</h3>
							<button
								aria-label='clear search history'
								onClick={clearHistory}
								className='text-[#00A3A3] text-sm font-medium'
							>
								{t('nav.clearAll')}
							</button>
						</div>

						<div className='flex flex-col'>
							{history.map((item, index) => (
								<div
									key={index}
									className='flex justify-between items-center py-4 border-b border-gray-800/50'
								>
									<span
										className='text-gray-300 flex-1'
										onClick={() => {
											onSearchChange(item)
											setIsSearchModalOpen(false)
										}}
									>
										{item}
									</span>
									<IoClose
										className='text-gray-500 w-6 h-6 p-1 cursor-pointer'
										onClick={() => removeHistoryItem(item)}
									/>
								</div>
							))}
							{history.length === 0 && (
								<p className='text-gray-500 text-center mt-10 text-sm'>
									{t('nav.noPreviousSearches')}
								</p>
							)}
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
