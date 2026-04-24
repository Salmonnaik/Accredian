'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/shared/Card'

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Sign Up',
      description: 'Create your free account in less than 2 minutes. No credit card required.',
      details: 'Simply provide your email and create a password to get started instantly.'
    },
    {
      step: '02',
      title: 'Configure',
      description: 'Set up your workspace and customize the platform to match your needs.',
      details: 'Choose your preferences, invite team members, and configure integrations.'
    },
    {
      step: '03',
      title: 'Launch',
      description: 'Start using all features immediately with full access to our platform.',
      details: 'Access tutorials, documentation, and support to make the most of your trial.'
    },
    {
      step: '04',
      title: 'Scale',
      description: 'Grow your usage as your team and business expand.',
      details: 'Upgrade your plan anytime to unlock advanced features and increased capacity.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes and see results in days. Our streamlined onboarding process makes it easy to transform your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  {step.description}
                </p>
                <p className="text-gray-500">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
            <Card.Body className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Getting Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team of experts is here to help you set up your account and ensure you get the most value from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  Schedule Onboarding Call
                </button>
                <button 
                  onClick={() => window.open('/docs', '_blank')}
                  className="px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200"
                >
                  View Documentation
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export { HowItWorksSection }
