'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Lead } from '@/types/lead'

interface LeadFormProps {
  onSubmit?: (data: Lead) => void
  className?: string
  variant?: 'default' | 'compact'
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  onSubmit, 
  className,
  variant = 'default' 
}) => {
  const [formData, setFormData] = useState<Lead>({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Partial<Lead>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<Lead> = {}

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof Lead]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        onSubmit?.(result.data)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', message: '' })
          setIsSubmitted(false)
        }, 3000)
      } else {
        throw new Error(result.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // You could add a toast notification here
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={className}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Thank you for your interest!
          </h3>
          <p className="text-green-700">
            We'll be in touch with you shortly.
          </p>
        </div>
      </div>
    )
  }

  const isCompact = variant === 'compact'

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`space-y-4 ${isCompact ? '' : 'sm:space-y-6'}`}>
        <div className={isCompact ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : ''}>
          <Input
            name="name"
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="John Doe"
            required
            className={isCompact ? '' : 'text-lg'}
          />
          
          <Input
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="john@example.com"
            required
            className={isCompact ? '' : 'text-lg'}
          />
        </div>

        {!isCompact && (
          <Input
            name="company"
            label="Company (Optional)"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Acme Corp"
            className="text-lg"
          />
        )}

        {!isCompact && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell us about your needs..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-lg"
            />
          </div>
        )}

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          size={isCompact ? 'sm' : 'lg'}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : isCompact ? 'Get Started' : 'Start Free Trial'}
        </Button>
      </div>
    </form>
  )
}

export { LeadForm }
