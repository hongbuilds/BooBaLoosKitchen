// src/components/ui/Button.jsx
import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
}

export const Button = ({ 
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  disabled = false,
  ...props 
}) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    font-medium
    rounded-lg
    transition-colors
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={baseStyles} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      className={baseStyles}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

// Usage examples:
/*
// Regular button
<Button>Click me</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With Link
<Button to="/somewhere">Go to page</Button>

// With href
<Button href="https://example.com">External link</Button>

// Disabled state
<Button disabled>Cannot click</Button>

// With icon
<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add new
</Button>
*/