export default function Button({ children, className = "", ...props }) {
  return (
    <button
    aria-label='cool look button'
      className={`lg:px-5 px-3 w-max lg:py-2 py-3 bg-light-blue border border-transparent font-manrope text-white hover:bg-light-blue/80 ${className} active:bg-transparent active:border-light-blue active:text-light-blue transition-colors cursor-pointer text-xs lg:text-base flex items-center justify-center gap-2`}
      {...props}
    >
      {children}
    </button>
  );
}