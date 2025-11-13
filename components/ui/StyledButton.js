import { forwardRef } from 'react'

const StyledButton = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'

  const variants = {
    primary: 'bg-white text-[#82caff] border-2 border-[#82caff] hover:bg-[#82caff] hover:text-white hover:shadow-lg hover:shadow-[#82caff]/25 focus:ring-[#82caff] font-semibold',
    secondary: 'bg-[#82caff] text-white border-2 border-[#82caff] hover:bg-white hover:text-[#82caff] hover:shadow-lg hover:shadow-[#82caff]/25 focus:ring-[#82caff] font-semibold',
    accent: 'bg-gradient-to-r from-[#82caff] to-[#60a5fa] text-white hover:from-[#60a5fa] hover:to-[#82caff] hover:shadow-xl hover:shadow-[#82caff]/30 focus:ring-[#82caff] font-semibold border-2 border-transparent',
    danger: 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-600/25 focus:ring-red-600 font-semibold',
    ghost: 'bg-transparent text-[#82caff] border-2 border-transparent hover:bg-[#82caff]/10 hover:border-[#82caff] focus:ring-[#82caff] font-semibold'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const animationClasses = 'animate-glow-button hover:animate-pulse'
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${animationClasses} ${className}`

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

StyledButton.displayName = 'StyledButton'

export default StyledButton