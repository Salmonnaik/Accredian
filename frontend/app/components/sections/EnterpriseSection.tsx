'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/shared/Card'
import { Badge } from '@/components/shared/Badge'
import { Button } from '@/components/ui/Button'

const EnterpriseSection: React.FC = () => {
  const features = [
    'Unlimited users and projects',
    'Advanced security and compliance',
    'Dedicated account manager',
    'Custom integrations and API access',
    'Priority 24/7 phone support',
    'Custom training and onboarding',
    'SLA guarantee with 99.99% uptime',
    'Data migration services'
  ]

  return (
    <section id="enterprise" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-6 border-white text-white">
              Enterprise
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Built for Scale and Security
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our enterprise plan is designed for organizations that need advanced features, enhanced security, and dedicated support.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Sales
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.open('/enterprise-demo', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Enterprise Pricing
                </h3>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-white mb-2">
                    Custom Pricing
                  </div>
                  <p className="text-gray-300">
                    Tailored solutions for your organization's needs
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Minimum Users</span>
                    <span className="text-white font-medium">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Support Response Time</span>
                    <span className="text-white font-medium">&lt; 1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Contract Length</span>
                    <span className="text-white font-medium">Annual</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Data Storage</span>
                    <span className="text-white font-medium">Unlimited</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Custom Quote
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { EnterpriseSection }
