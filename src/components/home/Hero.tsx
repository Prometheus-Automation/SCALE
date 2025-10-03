import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
          If you're losing customers to weak social, here's what I'd do
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Stop bleeding money on social media that doesn't convert. Get a free audit and see exactly where you're leaving revenue on the table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Get Your Free Audit
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-neutral-900 text-neutral-900 px-8 py-4 text-lg font-medium hover:bg-neutral-50 transition-colors w-full sm:w-auto text-center"
          >
            See Results
          </Link>
        </div>
      </div>
    </section>
  );
}
