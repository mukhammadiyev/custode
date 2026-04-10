import { useEffect, lazy, Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

import useDevice from './hooks/useDevice'

// Lazy loaded sections
const About = lazy(() => import('./components/sections/About'))
const Products = lazy(() => import('./components/sections/Products'))
const Thoughts = lazy(() => import('./components/sections/Thoughts'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Contact = lazy(() => import('./components/sections/Contact'))

function App() {
	const { i18n } = useTranslation()
	const [searchQuery, setSearchQuery] = useState('')
	const isMobile = useDevice()

	// SEO uchun html lang ni o'zgartirish
	useEffect(() => {
		document.documentElement.lang = i18n.language
	}, [i18n.language])

	return (
		<>
			<Navbar onSearchChange={setSearchQuery} />

			<main className='bg-dark-brown flex flex-col lg:gap-20 gap-5 md:pb-20'>
				{/* Do NOT lazy load Hero (LCP element) */}
				<Hero />

				<Suspense fallback={null}>
					<About />
				</Suspense>

				<Suspense fallback={null}>
					<Products searchQuery={searchQuery} />
				</Suspense>

				<Suspense fallback={null}>
					<Thoughts />
				</Suspense>

				<Suspense fallback={null}>
					<Gallery />
				</Suspense>

				<Suspense fallback={null}>
					<Contact />
				</Suspense>
			</main>

			<Footer />
		</>
	)
}

export default App