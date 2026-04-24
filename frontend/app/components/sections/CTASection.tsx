'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { LeadForm } from '@/components/forms/LeadForm'

const CTASection: React.FC = () => {
  const handleLeadSubmit = (data: any) => {
    console.log('CTA Lead submitted:', data)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join thousands of companies already using our platform to streamline operations and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Start Your Free Trial Today
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">No Credit Card Required</h4>
                  <p className="text-primary-100">Start with full access to all features for 14 days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Setup in Minutes</h4>
                  <p className="text-primary-100">No complex installation or configuration required</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Cancel Anytime</h4>
                  <p className="text-primary-100">No long-term commitments or hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-semibold text-lg mb-4">Questions?</h4>
              <p className="text-primary-100 mb-4">
                Our team is here to help you find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                  onClick={() => window.open('/support', '_blank')}
                >
                  Chat with Support
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                  onClick={() => window.open('/demo', '_blank')}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Started Now
              </h3>
              <LeadForm onSubmit={handleLeadSubmit} variant="compact" />
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    SSL Secured
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Privacy Protected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { CTASection }
