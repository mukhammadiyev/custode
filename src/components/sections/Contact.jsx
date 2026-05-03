import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
	const { t } = useTranslation()
	const [status, setStatus] = useState('') // "", "loading", "success", "error"

	const handleSubmit = async e => {
		e.preventDefault()
		setStatus('loading')

		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData.entries())

		try {
			// Vercel /api/contact endpointiga so'rov
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

			if (response.ok) {
				setStatus('success')
				e.target.reset()
				setTimeout(() => setStatus(''), 5000)
			} else {
				setStatus('error')
			}
		} catch (error) {
			setStatus('error')
		}
	}

	return (
		<section id='contact' className='scroll-mt-24 text-white font-manrope'>
			<div className='container mx-auto pt-4 pb-10 lg:py-7 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-65'>
				<h2 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white leading-tight mb-3 md:mb-8'>
					{t('contact.title')}
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
					<div className='lg:col-span-2 bg-light-brown p-4 md:p-8 '>
						<h3 className='text-xl font-semibold mb-6 border-b border-gray-700 pb-4'>
							{t('contact.email_contact')}
						</h3>

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label className='block text-xs uppercase text-white mb-1'>
										{t('contact.form.first_name')}
										<span className='text-red-500'>*</span>
									</label>
									<input
										name='first_name'
										required
										type='text'
										placeholder={t('contact.form.first_name_placeholder')}
										className='w-full bg-white text-black p-3 focus:outline-none'
									/>
								</div>
								<div>
									<label className='block text-xs uppercase text-white mb-1'>
										{t('contact.form.last_name')}
										<span className='text-red-500'>*</span>
									</label>
									<input
										name='last_name'
										required
										type='text'
										placeholder={t('contact.form.last_name_placeholder')}
										className='w-full bg-white text-black p-3 focus:outline-none'
									/>
								</div>
							</div>

							<div>
								<label className='block text-xs uppercase text-white mb-1'>
									{t('contact.form.email')}
									<span className='text-red-500'>*</span>
								</label>
								<input
									name='email'
									required
									type='email'
									placeholder={t('contact.form.email_placeholder')}
									className='w-full bg-white text-black p-3 focus:outline-none'
								/>
							</div>

							<div>
								<label className='block text-xs uppercase text-white mb-1'>
									{t('contact.form.message')}
									<span className='text-red-500'>*</span>
								</label>
								<textarea
									name='message'
									required
									rows='4'
									placeholder={t('contact.form.message_placeholder')}
									className='w-full bg-white text-black p-3 focus:outline-none resize-none'
								></textarea>
							</div>

							<div className='flex flex-col gap-4'>
								<button
									disabled={status === 'loading'}
									type='submit'
									aria-label='submit form'
									className='bg-light-blue hover:bg-light-blue/80 disabled:bg-gray-500 cursor-pointer transition-colors px-10 py-3 font-semibold text-white uppercase text-sm w-fit'
								>
									{status === 'loading' ? '...' : t('contact.form.submit')}
								</button>

								{status === 'success' && (
									<p className='text-green-400 text-sm'>
										Xabaringiz yuborildi. Rahmat!
									</p>
								)}
								{status === 'error' && (
									<p className='text-red-400 text-sm'>
										Xatolik yuz berdi. Qayta urinib ko'ring.
									</p>
								)}
							</div>
						</form>
					</div>

					<div className='bg-light-brown p-4 md:p-8'>
						<h3 className='text-xl font-semibold mb-6 border-b border-gray-700 pb-4'>
							{t('contact.contact_info')}
						</h3>

						<div className='space-y-8'>
							<div className='flex items-start gap-4'>
								<div className='bg-light-blue p-3 text-xl'>
									<FiPhone />
								</div>
								<div>
									<p className='text-xs text-white/80'>
										{t('contact.form.phone')}
									</p>
									<p className='font-medium'>{t('contact.info.phone_1')}</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='bg-light-blue p-3 text-xl'>
									<FiPhone />
								</div>
								<div>
									<p className='text-xs text-white/80'>
										{t('contact.form.phone')}
									</p>
									<p className='font-medium'>{t('contact.info.phone_2')}</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='bg-light-blue p-3 text-xl'>
									<FiMapPin />
								</div>
								<div>
									<p className='text-xs text-white/80'>
										{t('contact.form.address')}
									</p>
									<p className='font-medium text-xs'>
										{t('contact.info.address')}
									</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='bg-light-blue p-3 text-xl'>
									<FiMail />
								</div>
								<div>
									<p className='text-xs text-white/80'>
										{t('contact.form.email_info')}
									</p>
									<p className='font-medium'>{t('contact.info.email')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
