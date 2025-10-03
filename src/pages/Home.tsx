import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import LeadMagnet from '../components/home/LeadMagnet';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <LeadMagnet />
    </div>
  );
}
