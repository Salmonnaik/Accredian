'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/shared/Card'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      company: 'TechStart Inc.',
      content: 'This platform has completely transformed how our team operates. We\'ve seen a 40% increase in productivity since implementation.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'DataFlow Systems',
      content: 'The analytics features are incredible. We can now make data-driven decisions in real-time, which has been a game-changer for our product strategy.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Logistics Co.',
      content: 'Outstanding support and seamless integration with our existing tools. The onboarding process was smooth and our team adopted it quickly.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'Innovation Labs',
      content: 'The security features give us peace of mind knowing our data is protected. Best investment we\'ve made this year.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Creative Agency',
      content: 'Collaboration features have revolutionized how our creative teams work together. Projects that used to take weeks now take days.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      role: 'Finance Manager',
      company: 'Fortune 500 Company',
      content: 'The ROI has been exceptional. We\'ve reduced operational costs by 30% while improving efficiency across all departments.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover className="h-full">
              <Card.Body className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 flex-grow italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join thousands of satisfied customers
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your free trial today and see why businesses choose our platform for their critical operations.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { TestimonialsSection }
