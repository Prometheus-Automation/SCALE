import { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('lead_magnet_subscribers')
        .insert([
          {
            email,
            lead_magnet_type: '3 Social Media Mistakes'
          }
        ]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('This email is already subscribed.');
        } else {
          throw insertError;
        }
      } else {
        setIsSuccess(true);
        setEmail('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 px-6 lg:px-8 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Check your email
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Your guide is on its way. While you're here, want to see how we can help your business?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-neutral-900 px-8 py-4 text-lg font-medium hover:bg-neutral-100 transition-colors"
          >
            Get Your Free Audit
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-3xl mx-auto text-center">
        <Download className="w-12 h-12 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          The 3 Social Media Mistakes Killing Your Sales
        </h2>
        <p className="text-xl text-neutral-300 mb-8">
          Download our free guide. See what's costing you customers.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-4 py-3 border-2 border-neutral-700 bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:border-white"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-neutral-900 px-8 py-3 font-medium hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Guide'}
            </button>
          </div>
          {error && (
            <p className="text-red-400 text-sm mt-3 text-left">
              {error}
            </p>
          )}
        </form>

        <p className="text-neutral-400 text-sm mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
