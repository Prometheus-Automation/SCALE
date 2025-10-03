import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial: string | null;
  metric_label_1: string | null;
  metric_value_1: string | null;
  metric_label_2: string | null;
  metric_value_2: string | null;
  metric_label_3: string | null;
  metric_value_3: string | null;
}

export default function Portfolio() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error('Error loading case studies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const industries = ['All', ...new Set(caseStudies.map((cs) => cs.industry))];
  const filteredCaseStudies =
    selectedIndustry === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <p className="text-neutral-600">Loading case studies...</p>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
              Results that speak for themselves
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real campaigns. Real numbers. Real businesses transformed.
            </p>
          </div>

          {caseStudies.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-5 py-2 text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          )}

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <TrendingUp className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Case studies coming soon
              </h2>
              <p className="text-neutral-600 mb-8">
                We're documenting our latest client wins. Check back soon.
              </p>
              <a
                href="/contact"
                className="inline-block bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:bg-neutral-800 transition-colors"
              >
                Be Our Next Success Story
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-neutral-50 p-8 border-2 border-neutral-200 hover:border-neutral-900 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
                      {caseStudy.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                    {caseStudy.client_name}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseStudy.metric_value_1 && (
                      <div>
                        <div className="text-3xl font-bold text-neutral-900">
                          {caseStudy.metric_value_1}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {caseStudy.metric_label_1}
                        </div>
                      </div>
                    )}
                    {caseStudy.metric_value_2 && (
                      <div>
                        <div className="text-3xl font-bold text-neutral-900">
                          {caseStudy.metric_value_2}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {caseStudy.metric_label_2}
                        </div>
                      </div>
                    )}
                    {caseStudy.metric_value_3 && (
                      <div>
                        <div className="text-3xl font-bold text-neutral-900">
                          {caseStudy.metric_value_3}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {caseStudy.metric_label_3}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 text-neutral-700">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Challenge</h4>
                      <p className="text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Solution</h4>
                      <p className="text-sm">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Results</h4>
                      <p className="text-sm">{caseStudy.results}</p>
                    </div>
                  </div>

                  {caseStudy.testimonial && (
                    <div className="mt-6 pt-6 border-t border-neutral-300">
                      <p className="text-neutral-700 italic">
                        "{caseStudy.testimonial}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
