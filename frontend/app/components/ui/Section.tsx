import React from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'primary'
  py?: 'sm' | 'md' | 'lg' | 'xl'
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id, 
  background = 'white',
  py = 'lg' 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  }

  const padding = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  }

  return (
    <section 
      id={id}
      className={cn(
        backgrounds[background],
        padding[py],
        className
      )}
    >
      {children}
    </section>
  )
}

export { Section }
