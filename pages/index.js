import Feature from '../components/Feature/feature';
import Hero from '../components/Hero/hero';
import Section from '../components/Layout/section';
import StorageService from '../services/storageService';

export default function Home() {
  const { setItem } = StorageService();
  setItem('init', 'init', 'session');
  return (
    <Section>
      <div>Home Page</div>
      <Hero />
      <Feature />
    </Section>
  );
}
