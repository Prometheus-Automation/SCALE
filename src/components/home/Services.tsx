import { Target, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Target,
    title: 'Content Strategy',
    description: 'Content that stops the scroll and drives action',
    benefits: [
      'Hook-driven frameworks',
      'Platform-specific optimization',
      'Data-backed creative direction'
    ]
  },
  {
    icon: Users,
    title: 'Social Media Management',
    description: 'Daily execution that builds audience and revenue',
    benefits: [
      'Consistent posting schedule',
      'Community engagement',
      'Brand voice development'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Paid Advertising',
    description: 'Ads that print money, not waste it',
    benefits: [
      'ROI-focused campaigns',
      'Advanced audience targeting',
      'Conversion optimization'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Know exactly what works and what does not',
    benefits: [
      'Weekly performance reports',
      'Actionable insights',
      'Revenue attribution tracking'
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            What we do
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            No fluff. Just systems that turn followers into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 border border-neutral-200 hover:border-neutral-900 transition-all group"
            >
              <service.icon className="w-12 h-12 text-neutral-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="text-neutral-700 text-sm flex items-start">
                    <span className="text-neutral-900 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Start Getting Results
          </Link>
        </div>
      </div>
    </section>
  );
}
