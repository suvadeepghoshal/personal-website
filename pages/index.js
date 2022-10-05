import { useEffect } from 'react';
import Section from '../components/Layout/section';
import StorageService from '../services/storageService';

export default function Home() {
  const { setItem } = StorageService();
  setItem('init', 'init', 'session');
  return (
    <Section>
      <div>Home Page</div>
      <ul>
        <li>Hero Component</li>
        <li>Features/Advertise component</li>
      </ul>
    </Section>
  );
}
