import React from 'react';
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-brown text-white border-t border-gray-800 font-manrope">
      <div className="container mx-auto pt-4 pb-10 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 3xl:px-65">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Logo and Description - Spans 2 cols on lg screens */}
          <div className="lg:col-span-2 pr-0 lg:pr-20">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/images/logo/Logo.svg" 
                alt="Custode Logo" 
                className="lg:w-32 xl:w-36 2xl:w-45 h-7 lg:h-9 xl:h-10 2xl:h-11"
              />
            </div>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed text-justify">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation Links - Bo'limlar */}
          <div>
            <h4 className="text-light-blue text-xl font-semibold mb-6">{t("footer.sections")}</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-300">
              <a href="#about" className="hover:text-white transition-colors">{t("footer.links.about")}</a>
              <a href="#gallery" className="hover:text-white transition-colors">{t("footer.links.gallery")}</a>
              <a href="#products" className="hover:text-white transition-colors">{t("footer.links.products")}</a>
              <a href="#contact" className="hover:text-white transition-colors">{t("footer.links.contact")}</a>
              <a href="#feedback" className="hover:text-white transition-colors">{t("footer.links.thoughts")}</a>
            </div>
          </div>

          {/* Contact Info - Bog'lanish */}
          <div>
            <h4 className="text-light-blue text-xl font-semibold mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a href="mailto:custode@gmail.com" className="hover:text-white transition-colors">
                  {t("footer.contacts.email")}
                </a>
              </li>
              <li>
                <a href="tel:+998991324345" className="hover:text-white transition-colors">
                  {t("footer.contacts.phone_1")}
                </a>
              </li>
              <li>
                <a href="tel:+998991324345" className="hover:text-white transition-colors">
                  {t("footer.contacts.phone_2")}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            © {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;