import { useEffect } from 'react';
import Hero from '../components/Hero/hero';
import Section from '../components/Layout/section';
import StorageService from '../services/storageService';

export default function Home() {
  const { setItem, getItem } = StorageService();
  useEffect(() => {
    const existingInitData = getItem('init', 'session');
    if (existingInitData === undefined) {
      fetch('/api/init')
        .then((response) => {
          if (!response.ok) throw Error(response.status);
          else return response.json();
        })
        .then((data) => {
          setItem('init', data, 'session');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [getItem, setItem]);
  return (
    <Section>
      <Hero />
    </Section>
  );
}
