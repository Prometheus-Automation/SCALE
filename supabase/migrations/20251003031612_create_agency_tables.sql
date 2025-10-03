/*
  # Social Media Agency Database Schema

  1. New Tables
    - `consultation_leads`
      - `id` (uuid, primary key)
      - `name` (text, required) - Lead's full name
      - `email` (text, required) - Contact email
      - `phone` (text, optional) - Phone number
      - `company` (text, optional) - Company name
      - `monthly_revenue` (text, optional) - Current monthly revenue bracket
      - `main_challenge` (text, required) - Primary business challenge
      - `created_at` (timestamptz) - Submission timestamp

    - `lead_magnet_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, required, unique) - Subscriber email
      - `lead_magnet_type` (text, required) - Type of resource downloaded
      - `created_at` (timestamptz) - Subscription timestamp

    - `case_studies`
      - `id` (uuid, primary key)
      - `client_name` (text, required) - Client or company name
      - `industry` (text, required) - Business industry
      - `challenge` (text, required) - Problem client faced
      - `solution` (text, required) - How we solved it
      - `results` (text, required) - Measurable outcomes
      - `testimonial` (text, optional) - Client quote
      - `metric_label_1` (text, optional) - First metric label
      - `metric_value_1` (text, optional) - First metric value
      - `metric_label_2` (text, optional) - Second metric label
      - `metric_value_2` (text, optional) - Second metric value
      - `metric_label_3` (text, optional) - Third metric label
      - `metric_value_3` (text, optional) - Third metric value
      - `image_url` (text, optional) - Portfolio image URL
      - `featured` (boolean, default false) - Show on homepage
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on all tables
    - Public read access for case_studies (portfolio display)
    - Insert-only policies for consultation_leads and lead_magnet_subscribers
    - No update or delete from public for security
*/

-- Create consultation leads table
CREATE TABLE IF NOT EXISTS consultation_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  monthly_revenue text,
  main_challenge text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create lead magnet subscribers table
CREATE TABLE IF NOT EXISTS lead_magnet_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  lead_magnet_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create case studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  industry text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results text NOT NULL,
  testimonial text,
  metric_label_1 text,
  metric_value_1 text,
  metric_label_2 text,
  metric_value_2 text,
  metric_label_3 text,
  metric_value_3 text,
  image_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_magnet_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Policies for consultation_leads (insert only for public)
CREATE POLICY "Anyone can submit consultation request"
  ON consultation_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for lead_magnet_subscribers (insert only for public)
CREATE POLICY "Anyone can subscribe to lead magnets"
  ON lead_magnet_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for case_studies (read only for public)
CREATE POLICY "Anyone can view case studies"
  ON case_studies
  FOR SELECT
  TO anon
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS consultation_leads_created_at_idx ON consultation_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS lead_magnet_subscribers_email_idx ON lead_magnet_subscribers(email);
CREATE INDEX IF NOT EXISTS case_studies_featured_idx ON case_studies(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS case_studies_industry_idx ON case_studies(industry);