import React from 'react'
import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <svg
        className={cn('text-primary-600', sizes[size])}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <span className="text-xl font-bold text-gray-900">
        SaaSApp
      </span>
    </div>
  )
}

export { Logo }
