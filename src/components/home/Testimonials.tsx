import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechFlow Solutions',
    result: '847% ROI',
    quote: 'Our social ads went from losing money to being our top acquisition channel in 60 days.',
    metric: '+$287K revenue'
  },
  {
    name: 'Marcus Johnson',
    company: 'Apex Fitness',
    result: '12x leads',
    quote: 'We were posting randomly. Now we have a system that brings consistent, qualified leads daily.',
    metric: '4,200+ leads/mo'
  },
  {
    name: 'Rachel Kim',
    company: 'Haven Home Goods',
    result: '3.2M reach',
    quote: 'One viral campaign brought us more customers than our entire previous year. Game changer.',
    metric: '78K followers gained'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Real businesses. Real results.
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Numbers don't lie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-neutral-50 p-8 border-l-4 border-neutral-900"
            >
              <div className="mb-6">
                <div className="text-4xl font-bold text-neutral-900 mb-1">
                  {testimonial.result}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.metric}
                </div>
              </div>
              <Quote className="text-neutral-300 mb-4" size={32} />
              <p className="text-neutral-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-semibold text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-12 text-neutral-900">
            <div>
              <div className="text-4xl font-bold">150+</div>
              <div className="text-sm text-neutral-600">Clients scaled</div>
            </div>
            <div>
              <div className="text-4xl font-bold">$8.4M</div>
              <div className="text-sm text-neutral-600">Revenue generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold">94%</div>
              <div className="text-sm text-neutral-600">Client retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
