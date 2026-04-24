'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/shared/Card'
import { Badge } from '@/components/shared/Badge'
import { Button } from '@/components/ui/Button'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times and 99.9% uptime guarantee.',
      badge: 'Performance'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and advanced threat protection.',
      badge: 'Security'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time insights, custom dashboards, and predictive analytics powered by AI.',
      badge: 'Analytics'
    },
    {
      icon: '🔗',
      title: 'Seamless Integration',
      description: 'Connect with 100+ popular tools and APIs with our extensive integration library.',
      badge: 'Integration'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Real-time collaboration, role-based permissions, and team management tools.',
      badge: 'Collaboration'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Native mobile apps for iOS and Android with full feature parity.',
      badge: 'Mobile'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-6">Features</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features your team needs to work efficiently and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={feature.title} hover className="h-full">
              <Card.Body className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <Badge variant="outline" className="mb-4">{feature.badge}</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to get started?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to transform their business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Free Trial
              </Button>
              <Button 
                className="bg-white text-primary-700 hover:bg-gray-100"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { FeaturesSection }
