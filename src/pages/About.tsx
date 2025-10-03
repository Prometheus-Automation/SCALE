import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 tracking-tight">
            I built this because I was tired of watching businesses waste money on social media
          </h1>

          <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Ten years ago, I was running ads for local businesses. Burning through their budgets with nothing to show.
            </p>

            <p className="text-xl leading-relaxed">
              The problem wasn't the platforms. It was the approach.
            </p>

            <p className="text-xl leading-relaxed">
              Most agencies sell vanity metrics. Followers. Likes. Engagement. None of that pays the bills.
            </p>

            <p className="text-xl leading-relaxed">
              So I stopped caring about what looked good and started obsessing over what converted.
            </p>

            <div className="bg-neutral-50 border-l-4 border-neutral-900 p-8 my-12">
              <p className="text-2xl font-bold text-neutral-900 mb-4">
                The result?
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Clients who went from losing money on ads to 10x ROAS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Businesses that tripled revenue in 90 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">A repeatable system that works across industries</span>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed">
              Now I work with business owners who are done with "brand awareness" and ready to print money.
            </p>

            <p className="text-xl leading-relaxed">
              If your social media isn't bringing customers through the door, we need to talk.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-200">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">
              How we work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-neutral-900 mb-2">01</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Audit</h3>
                <p className="text-neutral-600">
                  We find where you're bleeding money and map the fix.
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-neutral-900 mb-2">02</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Execute</h3>
                <p className="text-neutral-600">
                  We build and launch campaigns designed to convert.
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-neutral-900 mb-2">03</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Scale</h3>
                <p className="text-neutral-600">
                  We double down on what works and kill what doesn't.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-block bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              Book Your Free Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
