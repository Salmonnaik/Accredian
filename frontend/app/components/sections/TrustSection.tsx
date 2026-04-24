import React from 'react'
import { Container } from '@/components/ui/Container'

const TrustSection: React.FC = () => {
  const trustLogos = [
    { name: 'TechCorp', width: 'w-24' },
    { name: 'DataFlow', width: 'w-20' },
    { name: 'CloudBase', width: 'w-28' },
    { name: 'SecureNet', width: 'w-24' },
    { name: 'InnoLab', width: 'w-20' },
    { name: 'NextGen', width: 'w-24' },
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Trusted by leading companies worldwide
          </p>
          <p className="text-2xl font-semibold text-gray-900">
            Join 10,000+ teams already using our platform
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {trustLogos.map((logo, index) => (
            <div
              key={logo.name}
              className={`${logo.width} h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium text-sm`}
              style={{ opacity: 0.7 + (index * 0.05) }}
            >
              {logo.name}
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { TrustSection }
