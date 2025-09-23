import { forwardRef } from 'react'

const Card = forwardRef(({
  children,
  variant = 'default',
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 ease-out'

  const variants = {
    default: 'bg-white shadow-lg border border-gray-200',
    glass: 'glass-card',
    neumorphism: 'bg-gray-100 shadow-neumorphism',
    elevated: 'bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <div
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

const CardHeader = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`p-6 pb-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

const CardContent = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }