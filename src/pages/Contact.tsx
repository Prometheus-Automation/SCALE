import { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    monthly_revenue: '',
    main_challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('consultation_leads')
        .insert([formData]);

      if (insertError) throw insertError;

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        monthly_revenue: '',
        main_challenge: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <CheckCircle className="w-20 h-20 text-neutral-900 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            We got your request
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Expect a response within 24 hours. We'll show you exactly where you're losing money and how to fix it.
          </p>
          <a
            href="/"
            className="inline-block bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                Let's see if we're a fit
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Fill out the form. We'll audit your social presence and show you the roadmap to real revenue growth.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">hello@scale.agency</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <p className="text-neutral-600">Remote / Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-neutral-50 p-6 border-l-4 border-neutral-900">
                <h3 className="font-bold text-neutral-900 mb-2">Response time</h3>
                <p className="text-neutral-700">
                  We respond to all consultation requests within 24 hours. Usually faster.
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="monthly_revenue" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Current Monthly Revenue
                  </label>
                  <select
                    id="monthly_revenue"
                    name="monthly_revenue"
                    value={formData.monthly_revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="0-10k">$0 - $10K</option>
                    <option value="10k-50k">$10K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k+">$500K+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="main_challenge" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Main Challenge *
                  </label>
                  <textarea
                    id="main_challenge"
                    name="main_challenge"
                    value={formData.main_challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What's your biggest challenge with social media right now?"
                    className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Audit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
