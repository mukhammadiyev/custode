import React from 'react';
// Assuming you use react-i18next or a similar translation hook
import { useTranslation } from 'react-i18next'; 

const ProductCard = ({ image, modelCode }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-light-brown flex flex-col items-center p-2 w-full lg:max-w-full 2xl:max-w-full group transition-all duration-300 font-manrope gap-3.5">
      {/* Image Container */}
      <div className="bg-transparent w-full min-h-60 lg:aspect-square flex items-center justify-center p-3">
        <img 
          src={image} 
          alt={modelCode} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="w-full px-2 text-left pb-3">
        <h3 className="text-white font-extrabold mb-1.5 text-2xl lg:text-[26px] lg:mb-3">
          {modelCode}
        </h3>
        
        {/* Order Button */}
        <a href='https://t.me/custodelock' target='_blank'>
          <button aria-label='order' className="flex items-center justify-between w-fit border border-light-blue bg-transparent px-5 py-2 lg:text-sm text-xs text-white hover:bg-light-blue transition-colors group-hover:border-light-blue cursor-pointer">
            {t('products.items.ms_212_c_be.cta')}
            <span className="ml-2">›</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;