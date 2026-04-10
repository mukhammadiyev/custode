import { CiSearch } from "react-icons/ci";

function SearchInput({ t ,onSearchChange }) {
  return (
    <div className='relative w-full 
      /* Mobile (sm--) to Medium */
      max-w-full 
      /* Tablet (md) */
      md:max-w-62.5
      /* Laptop (lg) */
      lg:max-w-45 
      /* Desktop (xl) */
      xl:max-w-55 
      /* Large Screens (2xl+) */
      2xl:max-w-3xs transition-all duration-300'>
      
      <input
        type='text'
        placeholder={t('nav.search')}
        onChange={(e) => onSearchChange(e.target.value)}
        className='w-full py-1 2xl:py-3 pl-4 pr-12 text-sm md:text-base text-gray-700 bg-white border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 font-manrope'
      />

      {/* Search Button */}
      <a href="#products">
        <button
        className='absolute inset-y-1 right-1 flex items-center justify-center aspect-square
          w-6 h-6 2xl:h-10 2xl:w-10 
          bg-light-blue hover:bg-light-blue/50 transition-colors'
        onClick={() => console.log('Search clicked')}
        aria-label="Search"
      >
        <CiSearch className='w-4 h-4 2xl:w-6 2xl:h-6 text-white' />
      </button>
      </a>
    </div>
  )
}

export default SearchInput;