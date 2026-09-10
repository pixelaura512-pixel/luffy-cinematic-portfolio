import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Origins from './components/Origins';
import SettingSail from './components/SettingSail';
import GrandLine from './components/GrandLine';
import Abilities from './components/Abilities';
import Will from './components/Will';
import StrawHatCrew from './components/StrawHatCrew';
import Qualities from './components/Qualities';
import Legacy from './components/Legacy';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="relative w-full bg-charcoal text-cream">
        <Navbar />
        <Hero />
        <Origins />
        <SettingSail />
        <GrandLine />
        <Abilities />
        <Will />
        <StrawHatCrew />
        <Qualities />
        <Legacy />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
