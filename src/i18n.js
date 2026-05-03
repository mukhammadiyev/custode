import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import it from './locales/it.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			ru: { translation: ru },
			it: { translation: it },
			uz: { translation: uz },
		}, // 1. Set Italian as the hard default
		lng: 'it',

		// 2. Change fallback to Italian
		fallbackLng: 'it',
		supportedLngs: ['uz', 'ru', 'en', 'it'],

		detection: {
			order: ['localStorage', 'navigator', 'htmlTag'],
			caches: ['localStorage'],
		},

		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
